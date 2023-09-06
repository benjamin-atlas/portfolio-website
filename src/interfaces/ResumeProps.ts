import ResumeBulletItem from "./ResumeBulletItem";

interface ResumeProps {
  header: string;
  subheader: string;
  timeFrame?: string;
  bulletItems: ResumeBulletItem[];
}

export default ResumeProps;
