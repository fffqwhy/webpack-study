import React, { FunctionComponent, useState } from "react";
import { Button } from 'antd';

interface StreamComProps {

}

const StreamCom: FunctionComponent<StreamComProps> = () => {
    const [data, setData] = useState<string>("");
    const getStream = async () => {
      const response = await fetch('http://localhost:8080/stream');
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        const processText = ({ done, value }: { done: boolean; value?: Uint8Array }) => {
          if (done) {
            console.log('Stream complete');
            return;
          }

          const chunk = decoder.decode(value, { stream: true });
          setData((prevData) => prevData + chunk);

          reader.read().then(processText).catch(error => {
            console.error('Error reading stream', error);
          });
        };

        reader.read().then(processText);
      }

    };

    return (<div>
        <Button onClick={getStream}>开始打字机</Button>
        {data}
    </div>);
}

export default StreamCom;