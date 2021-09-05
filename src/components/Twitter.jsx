import React from 'react';
import { Timeline } from 'react-twitter-widgets';

export default function Twitter(props) {

  return (
    <div className="relative">
      <Timeline
        dataSource={{ sourceType: "profile", screenName: props.handle }}
        options={{ width: "400", height: "600" }}
      />
    </div>
  )
}
