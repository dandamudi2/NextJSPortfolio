import React from 'react';

type AppWrapperProps = {
    component: any;
    id:string;
    classNames:string;
};

const AppWrapper = (Component:any,id:string,classNames:string) => 
    function HOC(){
        return (
             <div id={id} >
                <div>
                  <Component /> 
                  </div>
             </div>
        );

    };
   

export default AppWrapper;