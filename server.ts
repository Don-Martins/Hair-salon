import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function scrapeTarget() {
  try {
    console.log("Scraping velvera.framer.website...");
    const response = await fetch("https://velvera.framer.website/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });
    if (!response.ok) {
      console.error("Failed to fetch target site:", response.status, response.statusText);
      return;
    }
    const html = await response.text();
    fs.writeFileSync(path.join(process.cwd(), "src", "scraped_site.html"), html, "utf-8");
    console.log("Successfully scraped and saved raw HTML!");

    // Simple parsing to extract title and metas
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : "";

    const images: string[] = [];
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      images.push(match[1]);
    }

    const metas: { [key: string]: string } = {};
    const metaRegex = /<meta[^>]+(name|property)=["']([^"']+)["'][^>]+content=["']([^"']+)["']/gi;
    let metaMatch;
    while ((metaMatch = metaRegex.exec(html)) !== null) {
      metas[metaMatch[2]] = metaMatch[3];
    }

    // Capture CSS custom properties (variables)
    const cssVars: { [key: string]: string } = {};
    const cssVarRegex = /--([a-zA-Z0-9_-]+)\s*:\s*([^;}]+)/gi;
    let varMatch;
    while ((varMatch = cssVarRegex.exec(html)) !== null) {
      const name = varMatch[1].trim();
      const val = varMatch[2].trim();
      // Only keep interesting ones (colors, fonts, sizes)
      if (
        name.includes("color") ||
        name.includes("accent") ||
        name.includes("bg") ||
        name.includes("font") ||
        name.includes("border") ||
        val.startsWith("#") ||
        val.startsWith("rgba") ||
        val.startsWith("rgb")
      ) {
        cssVars[name] = val;
      }
    }

    // Extract all text chunks from HTML
    const textPieces: { tag: string; text: string }[] = [];
    const textRegex = /<(h1|h2|h3|h4|h5|h6|p|button|span|a)\b[^>]*>([\s\S]*?)<\/\1>/gi;
    let tMatch;
    while ((tMatch = textRegex.exec(html)) !== null) {
      const tag = tMatch[1].toLowerCase();
      const content = tMatch[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      if (content && content.length > 1 && !content.includes("framer") && !content.includes("Framer")) {
        textPieces.push({ tag, text: content });
      }
    }

    const data = {
      title,
      metas,
      images: Array.from(new Set(images)),
      cssVars,
      textPieces: textPieces.slice(0, 300),
      timestamp: new Date().toISOString(),
    };

    fs.writeFileSync(path.join(process.cwd(), "src", "scraped_data.json"), JSON.stringify(data, null, 2), "utf-8");
    console.log("Saved scraped metadata with CSS variables!");
  } catch (err) {
    console.error("Error scraping site:", err);
  }
}

async function startServer() {
  const app = reportAppStartup();
  const PORT = 3000;

  // Run scraper
  await scrapeTarget();

  // API endpoints
  app.get("/api/scraped-data", (req, res) => {
    try {
      const dataPath = path.join(process.cwd(), "src", "scraped_data.json");
      if (fs.existsSync(dataPath)) {
        res.sendFile(dataPath);
      } else {
        res.status(404).json({ error: "No scraped data found yet" });
      }
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.get("/api/scraped-html", (req, res) => {
    try {
      const htmlPath = path.join(process.cwd(), "src", "scraped_site.html");
      if (fs.existsSync(htmlPath)) {
        res.sendFile(htmlPath);
      } else {
        res.status(404).json({ error: "No scraped html found yet" });
      }
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // Serve static assets from public/assets if any
  app.use(express.static(path.join(process.cwd(), "public")));

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

function reportAppStartup() {
  return express();
}

startServer();
