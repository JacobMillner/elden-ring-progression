export interface ProgressRowProps {
  id: string;
  title: string;
  checked: boolean;
  image?: string;
  link?: string;
}

const ProgressRow = (props: ProgressRow) => {
  const { id, title, checked, image, link } = props;
  return <div>foo</div>;
};

export default ProgressRow;
