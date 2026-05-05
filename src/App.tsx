import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Kurse } from "./pages/Kurse";
import { KursDetail } from "./pages/KursDetail";
import { Pillar } from "./pages/Pillar";
import { ServiceDetail } from "./pages/ServiceDetail";
import { UeberMich } from "./pages/UeberMich";
import { Blog } from "./pages/Blog";
import { Kontakt } from "./pages/Kontakt";
import { Infos } from "./pages/Infos";
import { Kooperation } from "./pages/Kooperation";
import { Impressum } from "./pages/Impressum";
import { Datenschutz } from "./pages/Datenschutz";
import { NotFound } from "./pages/NotFound";

// Strip trailing slash so React Router treats "/phyneo" as the basename
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kurse" element={<Kurse />} />
          <Route path="kurse/:slug" element={<KursDetail />} />
          <Route path="kinder" element={<Pillar id="kinder" />} />
          <Route path="kinder/:slug" element={<ServiceDetail pillar="kinder" />} />
          <Route path="erwachsene" element={<Pillar id="erwachsene" />} />
          <Route path="erwachsene/:slug" element={<ServiceDetail pillar="erwachsene" />} />
          <Route path="unternehmen" element={<Pillar id="unternehmen" />} />
          <Route path="unternehmen/:slug" element={<ServiceDetail pillar="unternehmen" />} />
          <Route path="ueber-mich" element={<UeberMich />} />
          <Route path="blog" element={<Blog />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="infos" element={<Infos />} />
          <Route path="kooperation" element={<Kooperation />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
