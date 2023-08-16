import React from "react";
// HOC to wrap a component with a container
function withContainer(WrappedComponent, bgColor, id) {
  return function (props) {
    return (
      <div id={id} className={`${bgColor} lg:px-10 px-5 flex items-center`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withContainer;
