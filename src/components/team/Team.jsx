import img01 from "../../assets/images/team/team-01.png";
import img02 from "../../assets/images/team/team-02.png";
import img03 from "../../assets/images/team/team-03.png";
import img04 from "../../assets/images/team/team-04.png";

import TeamMemberCard from "./TeamMemberCard";
const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team Members
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
                Our Clients
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamMemberCard
            name="Melissa Tatcher"
            designation="Marketing Expert"
            image={img01}
          ></TeamMemberCard>

          <TeamMemberCard
            name="Stuard Ferrel"
            designation="Digital Marketer"
            image={img02}
          ></TeamMemberCard>
          <TeamMemberCard
            name="Eva Hudson"
            designation="Creative Designer"
            image={img03}
          ></TeamMemberCard>
          <TeamMemberCard
            name="Jackie Sanders"
            designation="Founder of Facebook"
            image={img04}
          ></TeamMemberCard>
        </div>
      </div>
    </section>
  );
};

export default Team;
