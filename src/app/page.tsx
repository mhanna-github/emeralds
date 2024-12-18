import { createClient } from "@/prismicio";
import { Nav } from "./components/nav";
import { Main } from "./components/home";
import { About } from "./components/about";
import { PrismicNextLink } from "@prismicio/next";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home");
  

  if (!page) {
    return <div>Page not found</div>;
  }
  
  const navigation = page.data.navigation.map(nav => ({
    title: nav.nav_link_title ?? '',
    link: nav.nav_link || '#',
  }));

  return (
    <>
      <Nav navigation={navigation} />
      <Main 
        title={page.data.home_title} 
        image={page.data.home_image} 
        text={page.data.home_text} 
      />
      <About 
        span1={page.data.about_span1} 
        title1={page.data.about_title1} 
        text1={page.data.about_text1} 
        span2={page.data.about_span2} 
        title2={page.data.about_title2} 
        text2={page.data.about_text2} 
        image1={page.data.about_image1} 
        image2={page.data.about_image2} 
        image3={page.data.about_image3} 
      />
    </>
  );
}
