export const espOptions = {
    'ExactTarget': '%%emailaddr%%',
    'Remarkety': '{$shopper.email}',
    'Iterable': '{{email}}',
    'ActiveCampaign': '%EMAIL%',
    'Marketo': '{{lead.Email Address}}',
    'Dextra': '{{profile.email}}'
};

export const initialDomains = {
    TrustedGoldReserve: {
        track: "track.trustedgoldreserve.com",
        esp: "ExactTarget",
        rt: "RT TM",
        abbr: "TGR",
        user: "155",
    },
    AmericanFreePost: {
        track: "click.americanfreepost.com",
        esp: "ExactTarget",
        rt: "RT Blue",
        abbr: "AFP",
        user: "111",
    },
    AmericanStockAdvisors: {
        track: "secure.americanstockadvisors.com",
        esp: "ExactTarget",
        rt: "RT Blue",
        abbr: "ASA",
        user: "111",
    },
    CapitalistsAndMoney: {
        track: "secure.capitalistsandmoney.com",
        esp: "ExactTarget",
        rt: "RT3 Blue",
        abbr: "CAM",
        user: "111",
    },
    DailyBusinessInvestor: {
        track: "click.dailybusinessinvestor.com",
        esp: "Iterable",
        rt: "Vol Blue",
        abbr: "DBI",
        user: "111",
    },
};