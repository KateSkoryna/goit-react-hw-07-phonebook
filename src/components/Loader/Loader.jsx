import { RotatingLines } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBox>
      <RotatingLines
        strokeColor="#b6d5d8"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderBox>
  );
};

export default Loader;
