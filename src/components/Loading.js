import React, { useEffect } from "react";

// const Loading = ({ loading }) => {
//   if (loading) return <h1>Loading...</h1>;
//   return null;
// };

// const Loading = ({ loading }) => (loading ? <h1>Loading...</h1> : null);

const Loading = ({ loading }) => {
  // const { loading } = props;
  useEffect(() => {
    console.log("Render");
    return () => {
      console.log("Unmount");
    };
  }, []);
  return <h1>Loading...</h1>;
};

// const Loading = React.memo(
//   (props) => {
//     console.log("reder");
//     return <h1 {...props}>Loading...</h1>;
//   },
//   (prevProps, nextProps) => prevProps.className === nextProps.className
// );

export default Loading;
