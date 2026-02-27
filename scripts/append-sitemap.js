import fs from "node:fs/promises";
import path from "node:path";

const sitemapPath = path.resolve("dist", "sitemap.xml");

async function main() {
  try {
    let content = await fs.readFile(sitemapPath, "utf8");
    const sitemapUrl = `<url><loc>https://blog.nelaka.xyz/</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`;

    // Check if the blog URL is already appended
    if (!content.includes("https://blog.nelaka.xyz/")) {
      if (!content.includes("</urlset>")) {
        throw new Error("Invalid sitemap format: missing </urlset> tag");
      }

      const newContent = content.replace("</urlset>", sitemapUrl + "\n</urlset>");

      if (newContent === content) {
        throw new Error("Failed to append blog URL: replacement did not modify the content");
      }

      await fs.writeFile(sitemapPath, newContent);
      console.log("Successfully appended blog URL to sitemap.xml");
    } else {
      console.log("Blog URL already exists in sitemap.xml");
    }
  } catch (error) {
    console.error("Failed to append to sitemap.xml:", error.message);
    process.exit(1);
  }
}

main();
