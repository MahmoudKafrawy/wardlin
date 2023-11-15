import { AboutUs } from "../components/page-sections/home/AboutUs";
import { Banner } from "../components/page-sections/home/Banner";

export function HomePage() {
  return (
    <>
      <div>
        <Banner />
        <AboutUs />
      </div>
    </>
  );
}
