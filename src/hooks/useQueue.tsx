// TODO - check if this is really necessary

import { useState } from "react";

export type useQueueFunctionType = () => void;

export const useQueue = () => {

    const [queue, setQueue] = useState<useQueueFunctionType[]>([]);
  
    const enqueue = (hookFunction: useQueueFunctionType) => {
        console.log("queue", hookFunction)
        
      setQueue([...queue, hookFunction]);
  
    };
  
    const dequeue = () => {
        console.log(queue.length)
      if (queue.length > 0) {
  
        const [first, ...rest] = queue;
  
        setQueue(rest);

        console.log(first())
  
        return first();
      }
  
      return null;
    };
  
  
  
    return { enqueue, dequeue };
  
  }
  