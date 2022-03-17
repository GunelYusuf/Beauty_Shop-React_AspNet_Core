import { DetailBlock } from 'components/shared/DetailBlock/DetailBlock';
import aboutBlockinfoData from 'data/aboutBlockinfo/aboutBlockinfo';

export const AboutDetailBlock = () => {
  const detailBlocks = [...aboutBlockinfoData];
  return (
    <>
        <DetailBlock detailBlocks={detailBlocks} />
    </>
  );
};
