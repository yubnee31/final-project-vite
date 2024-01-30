import {Helmet} from 'react-helmet-async';
export const homepageMatas = () => {
  return (
    <Helmet>
      <meta property="og:site_name" content="Aidol" />
      <meta property="og:title" content="Aidol 메인페이지"></meta>
      <meta property="og:description" content="아이돌 관련 커뮤니티"></meta>
      <meta property="og:url" content="https://aidol.life/"></meta>
      <meta property="og:type" content="website" />
      <meta property="og:image" content="	https://aidol.life/assets/bannerImg-elwE6_LD.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Aidol 메인페이지" />
      <meta name="twitter:description" content="아이돌 관련 커뮤니티" />
      <meta name="twitter:image" content="	https://aidol.life/assets/bannerImg-elwE6_LD.png" />
    </Helmet>
  );
};
