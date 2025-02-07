import React, { useEffect, useState } from 'react';
import UntitledSvgRendererProps from './UntitledSvgRenderer.types';
import { ModuleExport } from 'storybook/internal/types';
import { ImageNotFoundException, ImagePathOrSourceMustBeSetException } from '../../exceptions/images';
import Logger, { LogLevel } from '../../utils/Logger';

const UntitledSvgRenderer: React.FC<UntitledSvgRendererProps> = (props) => {
  const [img, setImg] = useState<ModuleExport>();

  const importImage = () => {
    import(props.imgPath!)
      .then(mod => { 
        if(!mod) throw new ImageNotFoundException("UntitledSvgRenderer", props.imgPath);

        setImg(mod.default);
      })
      .catch((err: ImageNotFoundException) => {
        err.log();
      })
        .catch((ex: any) =>{
          Logger.error(ex.toString());
        })
  };

  useEffect(() => {
    if(props.img) setImg(props.img);
    
    else if(props.imgPath) importImage();
    
    else { new ImagePathOrSourceMustBeSetException("UntitledSvgRenderer").log(LogLevel.WARN); }
  }, [props.img, props.imgPath]);

  return <img src={img}
            alt={props.altText} 
            width={props.width ?? ""}
            height={props.height ?? ""}
            aria-hidden={props.ariaHidden} />
};

export default UntitledSvgRenderer;
