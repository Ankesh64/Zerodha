import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
    // showBuyWindow: false,
    openBuyWindow: (uid) => {},
    closeBuyWindow: () => {},
        openSellWindow: (uid) => {},
    closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockID] = useState("");

    const handleOpenBuyWindow = (uid) => {
        setIsSellWindowOpen(false);
        setIsBuyWindowOpen(true);
        setSelectedStockID(uid);
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockID("");
    };

        const handleOpenSellWindow = (uid) => {
        setIsBuyWindowOpen(false);
        setIsSellWindowOpen(true);
        setSelectedStockID(uid);
    };

    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectedStockID("");
    };

    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,
                openSellWindow: handleOpenSellWindow,
                closeSellWindow: handleCloseSellWindow,
            }}
            >
                {props.children}
                {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
                {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
            </GeneralContext.Provider>
    );
};

export default GeneralContext;


