import { AppLayout } from "@muc/layout";
import {
  AboutStory,
  AnalyticCard,
  OurServices,
  TeamSlider,
} from "../../components/components";

const AboutContainer = () => {
  return (
    <AppLayout>
      <AboutStory />
      <AnalyticCard />
      <TeamSlider />
      <OurServices />
    </AppLayout>
  );
};

export default AboutContainer;
