import React, { useEffect, useState } from 'react';
import UntitledSvgRendererProps from './UntitledSvgRenderer.types';
import { ModuleExport } from 'storybook/internal/types';

const UntitledSvgRenderer: React.FC<UntitledSvgRendererProps> = (props) => {
  const [img, setImg] = useState<ModuleExport>();

  useEffect(() => {
    console.debug(props.img, props.imgPath);
    if(props.img){
      setImg(props.img);
    }else if(props.imgPath){
      import(props.imgPath)
      .then(mod => setImg(mod.default))
      .catch(() => {
        console.warn("UntitledSvgRenderer - ERROR - Image path not found");
      });
    }else{
      console.warn("UntitledSvgRenderer - ERROR - Property img or imgPath must be set");
    }
  }, [props.img, props.imgPath]);

  return <img src={img}
            alt={props.altText} 
            width={props.width ?? ""}
            height={props.height ?? ""}
            aria-hidden={props.ariaHidden} />
};

export default UntitledSvgRenderer;
