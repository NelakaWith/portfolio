import fs from "node:fs/promises";
import path from "node:path";

const sitemapPath = path.resolve("dist", "sitemap.xml");

async function main() {
  try {
    let content = await fs.readFile(sitemapPath, "utf8");
    const sitemapUrl = `<url><loc>https://blog.nelaka.xyz/</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`;

    // Check if the blog URL is already appended
    if (!content.includes("https://blog.nelaka.xyz/")) {
      content = content.replace("</urlset>", sitemapUrl + "</urlset>");
      await fs.writeFile(sitemapPath, content);
      console.log("Successfully appended blog URL to sitemap.xml");
    } else {
      console.log("Blog URL already exists in sitemap.xml");
    }
  } catch (error) {
    console.error("Failed to append to sitemap.xml:", error.message);
  }
}

main();
