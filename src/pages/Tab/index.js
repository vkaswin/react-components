import React, { useState } from "react";
import { Tab } from "components";

const tab = ["Tab One", "Tab Two", "Tab Three"];

const TabPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => () => {
    setActiveTab(index);
  };

  return (
    <div>
      <Tab tab={activeTab}>
        {tab.map((list, index) => {
          return (
            <Tab.Item key={index} onClick={handleClick(index)}>
              <span>{list}</span>
            </Tab.Item>
          );
        })}
      </Tab>
    </div>
  );
};

export default TabPage;
