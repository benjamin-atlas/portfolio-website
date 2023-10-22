import MajorSection from "../utilities/MajorSection";
import Resume from "../assets/Resume.pdf";

const Contact = () => {
  return (
    <MajorSection sectionName="contact" header="Contact" bgColor="bg-blue-100">
      <div className="text-base md:text-lg mb-3">
        Feel free to reach me through any of the following methods. I look
        forward to speaking with you!
      </div>
      <div className="text-base md:text-lg w-full mb-8">
        <div>
          <label className="mr-2 inline-block font-semibold">
            Phone (Call or Text):
          </label>
          <div className="inline-block">970-689-8619</div>
        </div>
        <div>
          <label className="mr-2 inline-block font-semibold">Email:</label>
          <a href="mailto:benjamin.s.atlas@gmail.com" className="inline-block">
            benjamin.s.atlas@gmail.com
          </a>
        </div>
        <div>
          <label className="mr-2 inline-block font-semibold">LinkedIn:</label>
          <a
            href="https://www.linkedin.com/in/benjamin-atlas-aa44a5121/"
            className="inline-block"
          >
            https://www.linkedin.com/in/benjamin-atlas-aa44a5121/
          </a>
        </div>
        <div>
          <label className="mr-2 inline-block font-semibold">Resume:</label>
          <a href={Resume} className="inline-block">
            Link
          </a>
        </div>
      </div>
    </MajorSection>
  );
};

export default Contact;
