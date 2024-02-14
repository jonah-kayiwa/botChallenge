import React from "react";

import SingleBot from "./SingleBot";

function BotCollection({ bots, enlistedBots, setEnlistedBots, handleBotDischarge  }) {
  
  return (
    <div className="BotCollection">

      <h2>MY BOT COLLECTION.</h2>
      
      <ul className="bot-collection">
        {bots.map((bot) => (
          <li key={bot.id}>
            <SingleBot
              bot={bot}
              enlistedBots={enlistedBots}
              setEnlistedBots={setEnlistedBots}
              handleBotDischarge={handleBotDischarge}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;