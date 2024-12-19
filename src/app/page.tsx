import { createClient } from "@/prismicio";
import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { TextBlock } from "./components/textBlock";
import { Works } from "./components/works";
import { Footer } from "./components/footer";

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

  const works = (page.data.works ?? []).map(work => ({
    image: work.work_image || null,
  }));

  return (
    <main data-scroll-container>
      <Nav navigation={navigation} />
      <Hero 
        title={page.data.home_title} 
        image={page.data.home_image} 
      />
      <About 
        span1={page.data.about_span1 ?? ''}
        title1={page.data.about_title1 ?? ''}
        text1={page.data.about_text1 ?? ''}
        span2={page.data.about_span2 ?? ''}
        title2={page.data.about_title2 ?? ''}
        text2={page.data.about_text2 ?? ''}
        image1={page.data.about_image1}
        image2={page.data.about_image2}
        image3={page.data.about_image3}
      />
      <TextBlock 
        title={page.data.text_block1 ?? ''} 
        subtitle={page.data.text_block2 ?? ''} 
        text={page.data.middle_text_block ?? ''} 
      />
      <Works works={works} />
      <Footer 
        title={page.data.footer_title ?? ''} 
        text={page.data.footer_text ?? ''}
      />
    </main>
  );
}
