import FAQs from "@/components/home/FAQs";
import Header from "@/components/home/Header";
import Introduction from "@/components/home/Introduction";
import JudgingCriteria from "@/components/home/JudgingCriteria";
import PartnersAndSponsors from "@/components/home/PartnersAndSponsors";
import PrivatePolicyAndTerms from "@/components/home/PrivatePolicyAndTerms";
import PrizesAndRewards from "@/components/home/PrizesAndRewards";
import RulesAndGuidelines from "@/components/home/RulesAndGuidelines";
import Timeline from "@/components/home/Timeline";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Introduction />
      <RulesAndGuidelines />
      <JudgingCriteria />
      <FAQs />
      <Timeline />
      <PrizesAndRewards />
      <PartnersAndSponsors />
      <PrivatePolicyAndTerms />
    </div>
  );
};

export default Home;
