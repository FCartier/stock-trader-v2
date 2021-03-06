import formatSearchData from "../utils/formatSearchData";

interface FormattedData {
  value: string;
  label: string;
}

const formattedSearchData: FormattedData[] = 
[
    {
      "value": "A",
      "label": "Agilent Technologies Inc. (A)"
    },
    {
      "value": "AA",
      "label": "Alcoa Corporation (AA)"
    },
    {
      "value": "AAAU",
      "label": "Perth Mint Physical Gold (AAAU)"
    },
    {
      "value": "AABA",
      "label": "Altaba Inc. (AABA)"
    },
    {
      "value": "AAC",
      "label": "AAC Holdings Inc. (AAC)"
    },
    {
      "value": "AADR",
      "label": "AdvisorShares Dorsey Wright ADR (AADR)"
    },
    {
      "value": "AAL",
      "label": "American Airlines Group Inc. (AAL)"
    },
    {
      "value": "AAMC",
      "label": "Altisource Asset Management Corp Com (AAMC)"
    },
    {
      "value": "AAME",
      "label": "Atlantic American Corporation (AAME)"
    },
    {
      "value": "AAN",
      "label": "Aaron's Inc. (AAN)"
    },
    {
      "value": "AAOI",
      "label": "Applied Optoelectronics Inc. (AAOI)"
    },
    {
      "value": "AAON",
      "label": "AAON Inc. (AAON)"
    },
    {
      "value": "AAP",
      "label": "Advance Auto Parts Inc W/I (AAP)"
    },
    {
      "value": "AAPL",
      "label": "Apple Inc. (AAPL)"
    },
    {
      "value": "AAT",
      "label": "American Assets Trust Inc. (AAT)"
    },
    {
      "value": "AAU",
      "label": "Almaden Minerals Ltd. (AAU)"
    },
    {
      "value": "AAWW",
      "label": "Atlas Air Worldwide Holdings (AAWW)"
    },
    {
      "value": "AAXJ",
      "label": "iShares MSCI All Country Asia ex Japan Index Fund (AAXJ)"
    },
    {
      "value": "AAXN",
      "label": "Axon Enterprise Inc. (AAXN)"
    },
    {
      "value": "AB",
      "label": "AllianceBernstein Holding L.P. Units (AB)"
    },
    {
      "value": "ABAC",
      "label": "Renmin Tianli Group Inc. (ABAC)"
    },
    {
      "value": "ABB",
      "label": "ABB Ltd (ABB)"
    },
    {
      "value": "ABBV",
      "label": "AbbVie Inc. (ABBV)"
    },
    {
      "value": "ABC",
      "label": "AmerisourceBergen Corporation (ABC)"
    },
    {
      "value": "ABCB",
      "label": "Ameris Bancorp (ABCB)"
    },
    {
      "value": "ABCD",
      "label": "Cambium Learning Group Inc. (ABCD)"
    },
    {
      "value": "ABDC",
      "label": "Alcentra Capital Corp. (ABDC)"
    },
    {
      "value": "ABEO",
      "label": "Abeona Therapeutics Inc. (ABEO)"
    },
    {
      "value": "ABEOW",
      "label": " (ABEOW)"
    },
    {
      "value": "ABEV",
      "label": "Ambev S.A. American Depositary Shares (Each representing 1) (ABEV)"
    },
    {
      "value": "ABG",
      "label": "Asbury Automotive Group Inc (ABG)"
    },
    {
      "value": "ABIL",
      "label": "Ability Inc. (ABIL)"
    },
    {
      "value": "ABIO",
      "label": "ARCA biopharma Inc. (ABIO)"
    },
    {
      "value": "ABM",
      "label": "ABM Industries Incorporated (ABM)"
    },
    {
      "value": "ABMD",
      "label": "ABIOMED Inc. (ABMD)"
    },
    {
      "value": "ABR",
      "label": "Arbor Realty Trust (ABR)"
    },
    {
      "value": "ABR-A",
      "label": "Arbor Realty Trust Preferred Series A (ABR-A)"
    },
    {
      "value": "ABR-B",
      "label": "Arbor Realty Trust Cumulative Redeemable Preferred Series B (ABR-B)"
    },
    {
      "value": "ABR-C",
      "label": "Arbor Realty Trust Cumulative Redeemable Preferred Series C (ABR-C)"
    },
    {
      "value": "ABT",
      "label": "Abbott Laboratories (ABT)"
    },
    {
      "value": "ABTX",
      "label": "Allegiance Bancshares Inc. (ABTX)"
    },
    {
      "value": "ABUS",
      "label": "Arbutus Biopharma Corporation (ABUS)"
    },
    {
      "value": "ABX",
      "label": "Barrick Gold Corporation (ABX)"
    },
    {
      "value": "AC",
      "label": "Associated Capital Group Inc. (AC)"
    },
    {
      "value": "ACAD",
      "label": "ACADIA Pharmaceuticals Inc. (ACAD)"
    },
    {
      "value": "ACBI",
      "label": "Atlantic Capital Bancshares Inc. (ACBI)"
    },
    {
      "value": "ACC",
      "label": "American Campus Communities Inc (ACC)"
    },
    {
      "value": "ACCO",
      "label": "Acco Brands Corporation (ACCO)"
    },
    {
      "value": "ACER",
      "label": "Acer Therapeutics Inc. (ACER)"
    },
    {
      "value": "ACES",
      "label": "ALPS Clean Energy (ACES)"
    },
    {
      "value": "ACET",
      "label": "Aceto Corporation (ACET)"
    },
    {
      "value": "ACGL",
      "label": "Arch Capital Group Ltd. (ACGL)"
    },
    {
      "value": "ACGLO",
      "label": "Arch Capital Group Ltd. Depositary Shares Each Representing 1/1000th Interest in a Share of5.45% Non-Cumulative Preferred Shares Series F (ACGLO)"
    },
    {
      "value": "ACGLP",
      "label": "Arch Capital Group Ltd. Depositary Shares Representing Interest in 5.25% Non-Cumulative Preferred Series E Shrs (ACGLP)"
    },
    {
      "value": "ACH",
      "label": "Aluminum Corporation of China Limited American Depositary Shares (ACH)"
    },
    {
      "value": "ACHC",
      "label": "Acadia Healthcare Company Inc. (ACHC)"
    },
    {
      "value": "ACHN",
      "label": "Achillion Pharmaceuticals Inc. (ACHN)"
    },
    {
      "value": "ACHV",
      "label": "Achieve Life Sciences Inc. (ACHV)"
    },
    {
      "value": "ACIA",
      "label": "Acacia Communications Inc. (ACIA)"
    },
    {
      "value": "ACIM",
      "label": "SPDR MSCI ACWI IMI (ACIM)"
    },
    {
      "value": "ACIU",
      "label": "AC Immune SA (ACIU)"
    },
    {
      "value": "ACIW",
      "label": "ACI Worldwide Inc. (ACIW)"
    },
    {
      "value": "ACLS",
      "label": "Axcelis Technologies Inc. (ACLS)"
    },
    {
      "value": "ACM",
      "label": "AECOM (ACM)"
    },
    {
      "value": "ACMR",
      "label": "ACM Research Inc. (ACMR)"
    },
    {
      "value": "ACN",
      "label": "Accenture plc Class A (Ireland) (ACN)"
    },
    {
      "value": "ACNB",
      "label": "ACNB Corporation (ACNB)"
    },
    {
      "value": "ACOR",
      "label": "Acorda Therapeutics Inc. (ACOR)"
    },
    {
      "value": "ACP",
      "label": "Aberdeen Income Credit Strategies Fund (ACP)"
    },
    {
      "value": "ACRE",
      "label": "Ares Commercial Real Estate Corporation (ACRE)"
    },
    {
      "value": "ACRS",
      "label": "Aclaris Therapeutics Inc. (ACRS)"
    },
    {
      "value": "ACRX",
      "label": "AcelRx Pharmaceuticals Inc. (ACRX)"
    },
    {
      "value": "ACSI",
      "label": "American Customer Satisfaction (ACSI)"
    },
    {
      "value": "ACST",
      "label": "Acasti Pharma Inc. (ACST)"
    },
    {
      "value": "ACT",
      "label": "AdvisorShares Vice ETF (ACT)"
    },
    {
      "value": "ACTG",
      "label": "Acacia Research Corporation (ACTG)"
    },
    {
      "value": "ACU",
      "label": "Acme United Corporation. (ACU)"
    },
    {
      "value": "ACV",
      "label": "AllianzGI Diversified Income & Convertible Fund of Beneficial Interest (ACV)"
    },
    {
      "value": "ACWF",
      "label": "iShares Edge MSCI Multifactor Global (ACWF)"
    },
    {
      "value": "ACWI",
      "label": "iShares MSCI ACWI Index Fund (ACWI)"
    },
    {
      "value": "ACWV",
      "label": "iShares Edge MSCI Min Vol Global (ACWV)"
    },
    {
      "value": "ACWX",
      "label": "iShares MSCI ACWI Ex US Index Fund (ACWX)"
    },
    {
      "value": "ACY",
      "label": "AeroCentury Corp. (ACY)"
    },
    {
      "value": "ADAP",
      "label": "Adaptimmune Therapeutics plc (ADAP)"
    },
    {
      "value": "ADBE",
      "label": "Adobe Systems Incorporated (ADBE)"
    },
    {
      "value": "ADC",
      "label": "Agree Realty Corporation (ADC)"
    },
    {
      "value": "ADES",
      "label": "Advanced Emissions Solutions Inc. (ADES)"
    },
    {
      "value": "ADI",
      "label": "Analog Devices Inc. (ADI)"
    },
    {
      "value": "ADIL",
      "label": "Adial Pharmaceuticals Inc (ADIL)"
    },
    {
      "value": "ADILW",
      "label": "Adial Pharmaceuticals Inc Warrant (ADILW)"
    },
    {
      "value": "ADM",
      "label": "Archer-Daniels-Midland Company (ADM)"
    },
    {
      "value": "ADMA",
      "label": "ADMA Biologics Inc (ADMA)"
    },
    {
      "value": "ADMP",
      "label": "Adamis Pharmaceuticals Corporation (ADMP)"
    },
    {
      "value": "ADMS",
      "label": "Adamas Pharmaceuticals Inc. (ADMS)"
    },
    {
      "value": "ADNT",
      "label": "Adient plc (ADNT)"
    },
    {
      "value": "ADOM",
      "label": "ADOMANI Inc. (ADOM)"
    },
    {
      "value": "ADP",
      "label": "Automatic Data Processing Inc. (ADP)"
    },
    {
      "value": "ADRA",
      "label": "Invesco BLDRS Asia 50 ADR Index Fund (ADRA)"
    },
    {
      "value": "ADRD",
      "label": "Invesco BLDRS Developed Markets 100 ADR Index Fund (ADRD)"
    },
    {
      "value": "ADRE",
      "label": "Invesco BLDRS Emerging Markets 50 ADR Index Fund (ADRE)"
    },
    {
      "value": "ADRO",
      "label": "Aduro Biotech Inc. (ADRO)"
    },
    {
      "value": "ADRU",
      "label": "Invesco BLDRS Europe Select ADR Index Fund (ADRU)"
    },
    {
      "value": "ADS",
      "label": "Alliance Data Systems Corporation (ADS)"
    },
    {
      "value": "ADSK",
      "label": "Autodesk Inc. (ADSK)"
    },
    {
      "value": "ADSW",
      "label": "Advanced Disposal Services Inc. (ADSW)"
    },
    {
      "value": "ADT",
      "label": "ADT Inc. (ADT)"
    },
    {
      "value": "ADTN",
      "label": "ADTRAN Inc. (ADTN)"
    },
    {
      "value": "ADUS",
      "label": "Addus HomeCare Corporation (ADUS)"
    },
    {
      "value": "ADVM",
      "label": "Adverum Biotechnologies Inc. (ADVM)"
    },
    {
      "value": "ADX",
      "label": "Adams Diversified Equity Fund Inc. (ADX)"
    },
    {
      "value": "ADXS",
      "label": "Advaxis Inc. (ADXS)"
    },
    {
      "value": "ADXSW",
      "label": "Advaxis Inc. Warrants (ADXSW)"
    },
    {
      "value": "AE",
      "label": "Adams Resources & Energy Inc. (AE)"
    },
    {
      "value": "AEB",
      "label": "AEGON N.V. Perp. Cap. Secs. Floating Rate (Netherlands) (AEB)"
    },
    {
      "value": "AED",
      "label": "AEGON N.V. Perp. Cap. Securities (Netherlands) (AED)"
    },
    {
      "value": "AEE",
      "label": "Ameren Corporation (AEE)"
    },
    {
      "value": "AEF",
      "label": "Aberdeen Emerging Markets Equity Income Fund Inc. (AEF)"
    },
    {
      "value": "AEG",
      "label": "AEGON N.V. (AEG)"
    },
    {
      "value": "AEGN",
      "label": "Aegion Corp (AEGN)"
    },
    {
      "value": "AEH",
      "label": "AEGON N.V. Perp. Cap Secs. (AEH)"
    },
    {
      "value": "AEHR",
      "label": "Aehr Test Systems (AEHR)"
    },
    {
      "value": "AEIS",
      "label": "Advanced Energy Industries Inc. (AEIS)"
    },
    {
      "value": "AEL",
      "label": "American Equity Investment Life Holding Company (AEL)"
    },
    {
      "value": "AEM",
      "label": "Agnico Eagle Mines Limited (AEM)"
    },
    {
      "value": "AEMD",
      "label": "Aethlon Medical Inc. (AEMD)"
    },
    {
      "value": "AEO",
      "label": "American Eagle Outfitters Inc. (AEO)"
    },
    {
      "value": "AEP",
      "label": "American Electric Power Company Inc. (AEP)"
    },
    {
      "value": "AER",
      "label": "Aercap Holdings N.V. (AER)"
    },
    {
      "value": "AERI",
      "label": "Aerie Pharmaceuticals Inc. (AERI)"
    },
    {
      "value": "AES",
      "label": "The AES Corporation (AES)"
    },
    {
      "value": "AET",
      "label": "Aetna Inc. (AET)"
    },
    {
      "value": "AETI",
      "label": "American Electric Technologies Inc. (AETI)"
    },
    {
      "value": "AEY",
      "label": "ADDvantage Technologies Group Inc. (AEY)"
    },
    {
      "value": "AEYE",
      "label": "AudioEye Inc. (AEYE)"
    },
    {
      "value": "AEZS",
      "label": "Aeterna Zentaris Inc. (AEZS)"
    },
    {
      "value": "AFB",
      "label": "AllianceBernstein National Municipal Income Fund Inc (AFB)"
    },
    {
      "value": "AFC",
      "label": "Allied Capital Corporation 6.875% Notes due April 15 2047 (AFC)"
    },
    {
      "value": "AFG",
      "label": "American Financial Group Inc. (AFG)"
    },
    {
      "value": "AFGE",
      "label": " (AFGE)"
    },
    {
      "value": "AFGH",
      "label": " (AFGH)"
    },
    {
      "value": "AFH",
      "label": "Atlas Financial Holdings Inc. (AFH)"
    },
    {
      "value": "AFHBL",
      "label": "Atlas Financial Holdings Inc. 6.625% Senior Unsecured Notes Due 2022 (AFHBL)"
    },
    {
      "value": "AFI",
      "label": "Armstrong Flooring Inc. (AFI)"
    },
    {
      "value": "AFIF",
      "label": "Anfield Universal Fixed Income (AFIF)"
    },
    {
      "value": "AFIN",
      "label": "American Finance Trust Inc. (AFIN)"
    },
    {
      "value": "AFK",
      "label": "VanEck Vectors-Africa Index (AFK)"
    },
    {
      "value": "AFL",
      "label": "AFLAC Incorporated (AFL)"
    },
    {
      "value": "AFMD",
      "label": "Affimed N.V. (AFMD)"
    },
    {
      "value": "AFSI",
      "label": "AmTrust Financial Services Inc. (AFSI)"
    },
    {
      "value": "AFSI-A",
      "label": "AmTrust Financial Services Inc. Preferred Series A (AFSI-A)"
    },
    {
      "value": "AFSI-B",
      "label": "AmTrust Financial Services Inc. Depository Shares Series B (AFSI-B)"
    },
    {
      "value": "AFSI-C",
      "label": "AmTrust Financial Services Inc. Depository Shares Series C (AFSI-C)"
    },
    {
      "value": "AFSI-D",
      "label": "AmTrust Financial Services Inc. Depositary Shares Series D (AFSI-D)"
    },
    {
      "value": "AFSI-E",
      "label": "AmTrust Financial Services Inc. Depositary Shares Series E (AFSI-E)"
    },
    {
      "value": "AFSI-F",
      "label": "AmTrust Financial Services Inc. Depositary Shares Series F (AFSI-F)"
    },
    {
      "value": "AFSS",
      "label": " (AFSS)"
    },
    {
      "value": "AFST",
      "label": " (AFST)"
    },
    {
      "value": "AFT",
      "label": "Apollo Senior Floating Rate Fund Inc. (AFT)"
    },
    {
      "value": "AFTY",
      "label": "CSOP FTSE China A50 (AFTY)"
    },
    {
      "value": "AG",
      "label": "First Majestic Silver Corp. (Canada) (AG)"
    },
    {
      "value": "AGCO",
      "label": "AGCO Corporation (AGCO)"
    },
    {
      "value": "AGD",
      "label": "Aberdeen Global Dynamic Dividend Fund (AGD)"
    },
    {
      "value": "AGEN",
      "label": "Agenus Inc. (AGEN)"
    },
    {
      "value": "AGF",
      "label": "DB Agriculture Long ETN due April 1 2038 (AGF)"
    },
    {
      "value": "AGFS",
      "label": "AgroFresh Solutions Inc. (AGFS)"
    },
    {
      "value": "AGFSW",
      "label": "AgroFresh Solutions Inc. Warrants (AGFSW)"
    },
    {
      "value": "AGG",
      "label": "iShares Core U.S. Aggregate Bond (AGG)"
    },
    {
      "value": "AGGE",
      "label": "IQ Enhanced Core Bond U.S. (AGGE)"
    },
    {
      "value": "AGGP",
      "label": "IQ Enhanced Core Plus Bond U.S. (AGGP)"
    },
    {
      "value": "AGGY",
      "label": "WisdomTree Yield Enhanced U.S. Aggregate Bond Fund (AGGY)"
    },
    {
      "value": "AGI",
      "label": "Alamos Gold Inc. Class A (AGI)"
    },
    {
      "value": "AGIO",
      "label": "Agios Pharmaceuticals Inc. (AGIO)"
    },
    {
      "value": "AGLE",
      "label": "Aeglea BioTherapeutics Inc. (AGLE)"
    },
    {
      "value": "AGM",
      "label": "Federal Agricultural Mortgage Corporation (AGM)"
    },
    {
      "value": "AGM-A",
      "label": "Federal Agricultural Mortgage Corporation 5.875% Non-CUmulative Preferred Stock Series A (AGM-A)"
    },
    {
      "value": "AGM-B",
      "label": "Federal Agricultural Mortgage Corporation Non Cumulative Preferred Stock Series B (AGM-B)"
    },
    {
      "value": "AGM-C",
      "label": "Federal Agricultural Mortgage Corporation Preferred Series C Fixed to Fltg (AGM-C)"
    },
    {
      "value": "AGM.A",
      "label": "Federal Agricultural Mortgage Corporation (AGM.A)"
    },
    {
      "value": "AGMH",
      "label": "AGM Group Holdings Inc. (AGMH)"
    },
    {
      "value": "AGN",
      "label": "Allergan plc (AGN)"
    },
    {
      "value": "AGNC",
      "label": "AGNC Investment Corp. (AGNC)"
    },
    {
      "value": "AGNCB",
      "label": "AGNC Investment Corp. Depositary Shares representing 1/1000th Series B Preferred Stock (AGNCB)"
    },
    {
      "value": "AGNCN",
      "label": "AGNC Investment Corp. Depositary Shares Each Representing a 1/1000th Interest in a Share of 7.00% Series C Fixed-To-Floating Rate Cumulative Redeemable Preferre (AGNCN)"
    },
    {
      "value": "AGND",
      "label": "WisdomTree Barclays U.S. Aggregate Bond Negative D (AGND)"
    },
    {
      "value": "AGO",
      "label": "Assured Guaranty Ltd. (AGO)"
    },
    {
      "value": "AGO-B",
      "label": "Assured Guaranty Ltd. (AGO-B)"
    },
    {
      "value": "AGO-E",
      "label": "Assured Guaranty Ltd. (AGO-E)"
    },
    {
      "value": "AGO-F",
      "label": "Assured Guaranty Ltd. (AGO-F)"
    },
    {
      "value": "AGQ",
      "label": "ProShares Ultra Silver (AGQ)"
    },
    {
      "value": "AGR",
      "label": "Avangrid Inc. (AGR)"
    },
    {
      "value": "AGRO",
      "label": "Adecoagro S.A. (AGRO)"
    },
    {
      "value": "AGRX",
      "label": "Agile Therapeutics Inc. (AGRX)"
    },
    {
      "value": "AGS",
      "label": "PlayAGS Inc. (AGS)"
    },
    {
      "value": "AGT",
      "label": "iShares MSCI Argentina and Global Exposure (AGT)"
    },
    {
      "value": "AGTC",
      "label": "Applied Genetic Technologies Corporation (AGTC)"
    },
    {
      "value": "AGX",
      "label": "Argan Inc. (AGX)"
    },
    {
      "value": "AGYS",
      "label": "Agilysys Inc. (AGYS)"
    },
    {
      "value": "AGZ",
      "label": "iShares Agency Bond (AGZ)"
    },
    {
      "value": "AGZD",
      "label": "WisdomTree Barclays U.S. Aggregate Bond Zero Durat (AGZD)"
    },
    {
      "value": "AHC",
      "label": "A.H. Belo Corporation (TX) (AHC)"
    },
    {
      "value": "AHH",
      "label": "Armada Hoffler Properties Inc. (AHH)"
    },
    {
      "value": "AHL",
      "label": "Aspen Insurance Holdings Limited (AHL)"
    },
    {
      "value": "AHL-C",
      "label": "Aspen Insurance Holdings Limited 5.95% Fixed-to-Floating Rate Perpetual Non-Cumulative Preference Shares (AHL-C)"
    },
    {
      "value": "AHL-D",
      "label": "Aspen Insurance Holdings Limited 5.625% Perpetual Non-Cumulative Preference Shares (AHL-D)"
    },
    {
      "value": "AHPA",
      "label": "Avista Healthcare Public Acquisition Corp. (AHPA)"
    },
    {
      "value": "AHPAU",
      "label": "Avista Healthcare Public Acquisition Corp. Unit (AHPAU)"
    },
    {
      "value": "AHPAW",
      "label": "Avista Healthcare Public Acquisition Corp. Warrants (AHPAW)"
    },
    {
      "value": "AHPI",
      "label": "Allied Healthcare Products Inc. (AHPI)"
    },
    {
      "value": "AHT",
      "label": "Ashford Hospitality Trust Inc (AHT)"
    },
    {
      "value": "AHT-D",
      "label": "Ashford Hospitality Trust Inc 8.45% Series D Cumulative Preferred Stock (AHT-D)"
    },
    {
      "value": "AHT-F",
      "label": "Ashford Hospitality Trust Inc 7.375% Series F Cumulative Preferred Stock (AHT-F)"
    },
    {
      "value": "AHT-G",
      "label": "Ashford Hospitality Trust Inc 7.375% Series G Cumulative Preferred Stock (AHT-G)"
    },
    {
      "value": "AHT-H",
      "label": "Ashford Hospitality Trust Inc 7.50% Series H Cumulative Preferred Stock (AHT-H)"
    },
    {
      "value": "AHT-I",
      "label": "Ashford Hospitality Trust Inc 7.50% Series I Cumulative Preferred Stock (AHT-I)"
    },
    {
      "value": "AI",
      "label": "Arlington Asset Investment Corp Class A (new) (AI)"
    },
    {
      "value": "AI-B",
      "label": "Arlington Asset Investment Corp 7.00% Series B Cumulative Perpetual Redeemable Preferred Stock (AI-B)"
    },
    {
      "value": "AIA",
      "label": "iShares Asia 50 ETF (AIA)"
    },
    {
      "value": "AIC",
      "label": " (AIC)"
    },
    {
      "value": "AIEQ",
      "label": "AI Powered Equity (AIEQ)"
    },
    {
      "value": "AIF",
      "label": "Apollo Tactical Income Fund Inc. (AIF)"
    },
    {
      "value": "AIG",
      "label": "American International Group Inc. (AIG)"
    },
    {
      "value": "AIG+",
      "label": "American International Group Inc. Warrant expiring January 19 2021 (AIG+)"
    },
    {
      "value": "AIHS",
      "label": "Senmiao Technology Limited (AIHS)"
    },
    {
      "value": "AIIQ",
      "label": "AI Powered International Equity (AIIQ)"
    },
    {
      "value": "AIMC",
      "label": "Altra Industrial Motion Corp. (AIMC)"
    },
    {
      "value": "AIMT",
      "label": "Aimmune Therapeutics Inc. (AIMT)"
    },
    {
      "value": "AIN",
      "label": "Albany International Corporation (AIN)"
    },
    {
      "value": "AINC",
      "label": "Ashford Inc. (Holding Company) (AINC)"
    },
    {
      "value": "AINV",
      "label": "Apollo Investment Corporation (AINV)"
    },
    {
      "value": "AIPT",
      "label": "Precision Therapeutics Inc. (AIPT)"
    },
    {
      "value": "AIQ",
      "label": "Global X Future Analytics Tech ETF (AIQ)"
    },
    {
      "value": "AIR",
      "label": "AAR Corp. (AIR)"
    },
    {
      "value": "AIRG",
      "label": "Airgain Inc. (AIRG)"
    },
    {
      "value": "AIRI",
      "label": "Air Industries Group (AIRI)"
    },
    {
      "value": "AIRR",
      "label": "First Trust RBA American Industrial Renaissance ET (AIRR)"
    },
    {
      "value": "AIRT",
      "label": "Air T Inc. (AIRT)"
    },
    {
      "value": "AIT",
      "label": "Applied Industrial Technologies Inc. (AIT)"
    },
    {
      "value": "AIV",
      "label": "Apartment Investment and Management Company (AIV)"
    },
    {
      "value": "AIV-A",
      "label": "Apartment Investment and Management Company Preferred Series Class A (AIV-A)"
    },
    {
      "value": "AIW",
      "label": "Arlington Asset Investment Corp 6.625% Notes due 2023 (AIW)"
    },
    {
      "value": "AIY",
      "label": "Apollo Investment Corporation 6.875% Senior Notes due 2043 (AIY)"
    },
    {
      "value": "AIZ",
      "label": "Assurant Inc. (AIZ)"
    },
    {
      "value": "AIZP",
      "label": "Assurant Inc. 6.50% Series D Mandatory Convertible Preferred Stock $1.00 par value (AIZP)"
    },
    {
      "value": "AJG",
      "label": "Arthur J. Gallagher & Co. (AJG)"
    },
    {
      "value": "AJRD",
      "label": "Aerojet Rocketdyne Holdings Inc. (AJRD)"
    },
    {
      "value": "AJX",
      "label": "Great Ajax Corp. (AJX)"
    },
    {
      "value": "AJXA",
      "label": "Great Ajax Corp. 7.25% Convertible Senior Notes due 2024 (AJXA)"
    },
    {
      "value": "AKAM",
      "label": "Akamai Technologies Inc. (AKAM)"
    },
    {
      "value": "AKAO",
      "label": "Achaogen Inc. (AKAO)"
    },
    {
      "value": "AKBA",
      "label": "Akebia Therapeutics Inc. (AKBA)"
    },
    {
      "value": "AKCA",
      "label": "Akcea Therapeutics Inc. (AKCA)"
    },
    {
      "value": "AKER",
      "label": "Akers Biosciences Inc (AKER)"
    },
    {
      "value": "AKG",
      "label": "Asanko Gold Inc. (AKG)"
    },
    {
      "value": "AKO.A",
      "label": "Embotelladora Andina S.A. (AKO.A)"
    },
    {
      "value": "AKO.B",
      "label": "Embotelladora Andina S.A. (AKO.B)"
    },
    {
      "value": "AKP",
      "label": "Alliance California Municipal Income Fund Inc (AKP)"
    },
    {
      "value": "AKR",
      "label": "Acadia Realty Trust (AKR)"
    },
    {
      "value": "AKRX",
      "label": "Akorn Inc. (AKRX)"
    },
    {
      "value": "AKS",
      "label": "AK Steel Holding Corporation (AKS)"
    },
    {
      "value": "AKTS",
      "label": "Akoustis Technologies Inc. (AKTS)"
    },
    {
      "value": "AKTX",
      "label": "Akari Therapeutics Plc (AKTX)"
    },
    {
      "value": "AL",
      "label": "Air Lease Corporation Class A (AL)"
    },
    {
      "value": "ALB",
      "label": "Albemarle Corporation (ALB)"
    },
    {
      "value": "ALBO",
      "label": "Albireo Pharma Inc. (ALBO)"
    },
    {
      "value": "ALCO",
      "label": "Alico Inc. (ALCO)"
    },
    {
      "value": "ALD",
      "label": "WisdomTree Asia Local Debt Fund (ALD)"
    },
    {
      "value": "ALDR",
      "label": "Alder BioPharmaceuticals Inc. (ALDR)"
    },
    {
      "value": "ALDX",
      "label": "Aldeyra Therapeutics Inc. (ALDX)"
    },
    {
      "value": "ALE",
      "label": "Allete Inc. (ALE)"
    },
    {
      "value": "ALEX",
      "label": "Alexander & Baldwin Inc. REIT Holding Company (ALEX)"
    },
    {
      "value": "ALFA",
      "label": "AlphaClone Alternative Alpha (ALFA)"
    },
    {
      "value": "ALG",
      "label": "Alamo Group Inc. (ALG)"
    },
    {
      "value": "ALGN",
      "label": "Align Technology Inc. (ALGN)"
    },
    {
      "value": "ALGR",
      "label": "Allegro Merger Corp. (ALGR)"
    },
    {
      "value": "ALGRR",
      "label": "Allegro Merger Corp. Right (ALGRR)"
    },
    {
      "value": "ALGRU",
      "label": "Allegro Merger Corp. Unit (ALGRU)"
    },
    {
      "value": "ALGRW",
      "label": "Allegro Merger Corp. Warrant (ALGRW)"
    },
    {
      "value": "ALGT",
      "label": "Allegiant Travel Company (ALGT)"
    },
    {
      "value": "ALIM",
      "label": "Alimera Sciences Inc. (ALIM)"
    },
    {
      "value": "ALJJ",
      "label": "ALJ Regional Holdings Inc. (ALJJ)"
    },
    {
      "value": "ALK",
      "label": "Alaska Air Group Inc. (ALK)"
    },
    {
      "value": "ALKS",
      "label": "Alkermes plc (ALKS)"
    },
    {
      "value": "ALL",
      "label": "Allstate Corporation (The) (ALL)"
    },
    {
      "value": "ALL-A",
      "label": "Allstate Corporation (The) Dep Shs Repstg 1/1000th Perp Pfd Ser A (ALL-A)"
    },
    {
      "value": "ALL-B",
      "label": "Allstate Corporation (The) 5.100% Fixed-to-Floating Rate Subordinated Debentures due 2053 (ALL-B)"
    },
    {
      "value": "ALL-C*",
      "label": "Allstate Corporation (The) Dep Shs Repstg 1/1000th Int Shs Pfd Stk Ser C (ALL-C*)"
    },
    {
      "value": "ALL-D",
      "label": "The Allstate Corporation Leopards Each Representing A 1/1000th Interest In A Share Of Fixed Rate Noncumulative Perpetual Preferred Stock Series D (ALL-D)"
    },
    {
      "value": "ALL-E",
      "label": "Allstate Corporation Depositary Shares Series E (ALL-E)"
    },
    {
      "value": "ALL-F",
      "label": "Allstate Corporation (The) Leopards Dep Shares Representing 1/1000th Perp Pfd (ALL-F)"
    },
    {
      "value": "ALL-G",
      "label": "Allstate Corporation (The) Depositary Shares Series G (ALL-G)"
    },
    {
      "value": "ALLE",
      "label": "Allegion plc (ALLE)"
    },
    {
      "value": "ALLK",
      "label": "Allakos Inc. (ALLK)"
    },
    {
      "value": "ALLT",
      "label": "Allot Communications Ltd. (ALLT)"
    },
    {
      "value": "ALLY",
      "label": "Ally Financial Inc. (ALLY)"
    },
    {
      "value": "ALLY-A",
      "label": "GMAC Capital Trust I Fixed Rate Floating Rate Trust Preferred Securities Series 2 (ALLY-A)"
    },
    {
      "value": "ALNA",
      "label": "Allena Pharmaceuticals Inc. (ALNA)"
    },
    {
      "value": "ALNY",
      "label": "Alnylam Pharmaceuticals Inc. (ALNY)"
    },
    {
      "value": "ALO",
      "label": "Alio Gold Inc. (Canada) (ALO)"
    },
    {
      "value": "ALOT",
      "label": "AstroNova Inc. (ALOT)"
    },
    {
      "value": "ALP-Q",
      "label": "Alabama Power Company 5.00% Class A Preferred Stock Cumulative Par Value $1 Per Share (Stated Capital $25 Per Share) (ALP-Q)"
    },
    {
      "value": "ALPN",
      "label": "Alpine Immune Sciences Inc. (ALPN)"
    },
    {
      "value": "ALQA",
      "label": "Alliqua BioMedical Inc. (ALQA)"
    },
    {
      "value": "ALRM",
      "label": "Alarm.com Holdings Inc. (ALRM)"
    },
    {
      "value": "ALRN",
      "label": "Aileron Therapeutics Inc. (ALRN)"
    },
    {
      "value": "ALSK",
      "label": "Alaska Communications Systems Group Inc. (ALSK)"
    },
    {
      "value": "ALSN",
      "label": "Allison Transmission Holdings Inc. (ALSN)"
    },
    {
      "value": "ALT",
      "label": "Altimmune Inc. (ALT)"
    },
    {
      "value": "ALTR",
      "label": "Altair Engineering Inc. (ALTR)"
    },
    {
      "value": "ALTS",
      "label": "ProShares Morningstar Alternatives Solution (ALTS)"
    },
    {
      "value": "ALTY",
      "label": "Global X SuperDividend Alternatives ETF (ALTY)"
    },
    {
      "value": "ALV",
      "label": "Autoliv Inc. (ALV)"
    },
    {
      "value": "ALX",
      "label": "Alexander's Inc. (ALX)"
    },
    {
      "value": "ALXN",
      "label": "Alexion Pharmaceuticals Inc. (ALXN)"
    },
    {
      "value": "AM",
      "label": "Antero Midstream Partners LP representing limited partner interests (AM)"
    },
    {
      "value": "AMAG",
      "label": "AMAG Pharmaceuticals Inc. (AMAG)"
    },
    {
      "value": "AMAL",
      "label": "Amalgamated Bank (AMAL)"
    },
    {
      "value": "AMAT",
      "label": "Applied Materials Inc. (AMAT)"
    },
    {
      "value": "AMBA",
      "label": "Ambarella Inc. (AMBA)"
    },
    {
      "value": "AMBC",
      "label": "Ambac Financial Group Inc. (AMBC)"
    },
    {
      "value": "AMBCW",
      "label": "Ambac Financial Group Inc. Warrants (AMBCW)"
    },
    {
      "value": "AMBO",
      "label": "Ambow Education Holding Ltd. American Depository Shares each representing two Class A (AMBO)"
    },
    {
      "value": "AMBR",
      "label": "Amber Road Inc. (AMBR)"
    },
    {
      "value": "AMC",
      "label": "AMC Entertainment Holdings Inc. Class A (AMC)"
    },
    {
      "value": "AMCA",
      "label": "iShares Russell 1000 Pure U.S. Revenue ETF (AMCA)"
    },
    {
      "value": "AMCN",
      "label": "AirMedia Group Inc (AMCN)"
    },
    {
      "value": "AMCX",
      "label": "AMC Networks Inc. (AMCX)"
    },
    {
      "value": "AMD",
      "label": "Advanced Micro Devices Inc. (AMD)"
    },
    {
      "value": "AMDA",
      "label": "Amedica Corporation (AMDA)"
    },
    {
      "value": "AME",
      "label": "AMETEK Inc. (AME)"
    },
    {
      "value": "AMED",
      "label": "Amedisys Inc (AMED)"
    },
    {
      "value": "AMEH",
      "label": "Apollo Medical Holdings Inc. (AMEH)"
    },
    {
      "value": "AMG",
      "label": "Affiliated Managers Group Inc. (AMG)"
    },
    {
      "value": "AMGN",
      "label": "Amgen Inc. (AMGN)"
    },
    {
      "value": "AMGP",
      "label": "Antero Midstream GP LP of Beneficial Interests (AMGP)"
    },
    {
      "value": "AMH",
      "label": "American Homes 4 Rent of Beneficial Interest (AMH)"
    },
    {
      "value": "AMH-D",
      "label": "American Homes 4 Rent 6.5% Series D Cumulative Perpetual Preferred Shares of Beneficial Interest (AMH-D)"
    },
    {
      "value": "AMH-E",
      "label": "American Homes 4 Rent 6.35% Series E Cumulative Redeemable Perpetual Preferred Shares of Beneficial Interest (AMH-E)"
    },
    {
      "value": "AMH-F",
      "label": "American Homes 4 Rent 5.875% Series F Cumulative Redeemable Perpetual Preferred Shares (AMH-F)"
    },
    {
      "value": "AMH-G",
      "label": "American Homes 4 Rent Series G cumulative redeemable perpetual preferred shares of beneficial interest (AMH-G)"
    },
    {
      "value": "AMH-H",
      "label": "American Homes 4 Rent Series H cumulative redeemable perpetual Preferred Shares of Beneficial Interest (AMH-H)"
    },
    {
      "value": "AMID",
      "label": "American Midstream Partners LP representing Limited Partner Interests (AMID)"
    },
    {
      "value": "AMJ",
      "label": "JPMorgan Chase Capital XVI JP Morgan Alerian MLP ETN (AMJ)"
    },
    {
      "value": "AMJL",
      "label": "Credit Suisse X-Links Monthly Pay 2xLeveraged Alerian MLP Index Exchange Traded Notes due May 16 2036 (AMJL)"
    },
    {
      "value": "AMKR",
      "label": "Amkor Technology Inc. (AMKR)"
    },
    {
      "value": "AMLP",
      "label": "Alerian MLP (AMLP)"
    },
    {
      "value": "AMMA",
      "label": "Alliance MMA Inc. (AMMA)"
    },
    {
      "value": "AMN",
      "label": "AMN Healthcare Services Inc (AMN)"
    },
    {
      "value": "AMNB",
      "label": "American National Bankshares Inc. (AMNB)"
    },
    {
      "value": "AMOT",
      "label": "Allied Motion Technologies Inc. (AMOT)"
    },
    {
      "value": "AMOV",
      "label": "America Movil S.A.B. de C.V. Class An Depositary Shares (AMOV)"
    },
    {
      "value": "AMP",
      "label": "Ameriprise Financial Inc. (AMP)"
    },
    {
      "value": "AMPE",
      "label": "Ampio Pharmaceuticals Inc. (AMPE)"
    },
    {
      "value": "AMPH",
      "label": "Amphastar Pharmaceuticals Inc. (AMPH)"
    },
    {
      "value": "AMR",
      "label": "Alta Mesa Resources Inc. (AMR)"
    },
    {
      "value": "AMRB",
      "label": "American River Bankshares (AMRB)"
    },
    {
      "value": "AMRC",
      "label": "Ameresco Inc. Class A (AMRC)"
    },
    {
      "value": "AMRH",
      "label": "Ameri Holdings Inc. (AMRH)"
    },
    {
      "value": "AMRHW",
      "label": "Ameri Holdings Inc. Warrant (AMRHW)"
    },
    {
      "value": "AMRK",
      "label": "A-Mark Precious Metals Inc. (AMRK)"
    },
    {
      "value": "AMRN",
      "label": "Amarin Corporation plc (AMRN)"
    },
    {
      "value": "AMRS",
      "label": "Amyris Inc. (AMRS)"
    },
    {
      "value": "AMRWW",
      "label": "Alta Mesa Resources Inc. Warrant (AMRWW)"
    },
    {
      "value": "AMRX",
      "label": "Amneal Pharmaceuticals Inc. Class A (AMRX)"
    },
    {
      "value": "AMS",
      "label": "American Shared Hospital Services (AMS)"
    },
    {
      "value": "AMSC",
      "label": "American Superconductor Corporation (AMSC)"
    },
    {
      "value": "AMSF",
      "label": "AMERISAFE Inc. (AMSF)"
    },
    {
      "value": "AMSWA",
      "label": "American Software Inc. Class A Common Stock (AMSWA)"
    },
    {
      "value": "AMT",
      "label": "American Tower Corporation (REIT) (AMT)"
    },
    {
      "value": "AMTD",
      "label": "TD Ameritrade Holding Corporation (AMTD)"
    },
    {
      "value": "AMTX",
      "label": "Aemetis Inc (AMTX)"
    },
    {
      "value": "AMU",
      "label": "ETRACS Alerian MLP Index ETN (AMU)"
    },
    {
      "value": "AMUB",
      "label": "ETRACS Alerian MLP Index ETN Series B due July 18 2042 (AMUB)"
    },
    {
      "value": "AMWD",
      "label": "American Woodmark Corporation (AMWD)"
    },
    {
      "value": "AMX",
      "label": "America Movil S.A.B. de C.V.n Depository Receipt Series L (AMX)"
    },
    {
      "value": "AMZA",
      "label": "InfraCap MLP (AMZA)"
    },
    {
      "value": "AMZN",
      "label": "Amazon.com Inc. (AMZN)"
    },
    {
      "value": "AN",
      "label": "AutoNation Inc. (AN)"
    },
    {
      "value": "ANAB",
      "label": "AnaptysBio Inc. (ANAB)"
    },
    {
      "value": "ANAT",
      "label": "American National Insurance Company (ANAT)"
    },
    {
      "value": "ANCB",
      "label": "Anchor Bancorp (ANCB)"
    },
    {
      "value": "ANCX",
      "label": "Access National Corporation (ANCX)"
    },
    {
      "value": "ANDE",
      "label": "The Andersons Inc. (ANDE)"
    },
    {
      "value": "ANDX",
      "label": "Andeavor Logistics LP representing Limited Partner Interests (ANDX)"
    },
    {
      "value": "ANET",
      "label": "Arista Networks Inc. (ANET)"
    },
    {
      "value": "ANF",
      "label": "Abercrombie & Fitch Company (ANF)"
    },
    {
      "value": "ANFI",
      "label": "Amira Nature Foods Ltd (ANFI)"
    },
    {
      "value": "ANGI",
      "label": "ANGI Homeservices Inc. (ANGI)"
    },
    {
      "value": "ANGL",
      "label": "VanEck Vectors Fallen Angel High Yield Bond (ANGL)"
    },
    {
      "value": "ANGO",
      "label": "AngioDynamics Inc. (ANGO)"
    },
    {
      "value": "ANH",
      "label": "Anworth Mortgage Asset Corporation (ANH)"
    },
    {
      "value": "ANH-A",
      "label": "Anworth Mortgage Asset Corporation Series A Preferred Stock (ANH-A)"
    },
    {
      "value": "ANH-B",
      "label": "Anworth Mortgage Asset Corporation Preferred Stock Series B 6.25% (ANH-B)"
    },
    {
      "value": "ANH-C",
      "label": "Anworth Mortgage Asset Corporation 7.625% Series C Cumulative Redeemable Preferred Stock (ANH-C)"
    },
    {
      "value": "ANIK",
      "label": "Anika Therapeutics Inc. (ANIK)"
    },
    {
      "value": "ANIP",
      "label": "ANI Pharmaceuticals Inc. (ANIP)"
    },
    {
      "value": "ANIX",
      "label": "Anixa Biosciences Inc. (ANIX)"
    },
    {
      "value": "ANSS",
      "label": "ANSYS Inc. (ANSS)"
    },
    {
      "value": "ANTM",
      "label": "Anthem Inc. (ANTM)"
    },
    {
      "value": "ANW",
      "label": "Aegean Marine Petroleum Network Inc. (ANW)"
    },
    {
      "value": "ANY",
      "label": "Sphere 3D Corp. (ANY)"
    },
    {
      "value": "AOA",
      "label": "iShares Core Aggressive Allocation (AOA)"
    },
    {
      "value": "AOBC",
      "label": "American Outdoor Brands Corporation (AOBC)"
    },
    {
      "value": "AOD",
      "label": "Aberdeen Total Dynamic Dividend Fund (AOD)"
    },
    {
      "value": "AOK",
      "label": "iShares Core Conservative Allocation (AOK)"
    },
    {
      "value": "AOM",
      "label": "iShares Core Moderate Allocation (AOM)"
    },
    {
      "value": "AON",
      "label": "Aon plc Class A (UK) (AON)"
    },
    {
      "value": "AOR",
      "label": "iShares Core Growth Allocation (AOR)"
    },
    {
      "value": "AOS",
      "label": "A.O. Smith Corporation (AOS)"
    },
    {
      "value": "AOSL",
      "label": "Alpha and Omega Semiconductor Limited (AOSL)"
    },
    {
      "value": "AP",
      "label": "Ampco-Pittsburgh Corporation (AP)"
    },
    {
      "value": "APA",
      "label": "Apache Corporation (APA)"
    },
    {
      "value": "APAM",
      "label": "Artisan Partners Asset Management Inc. Class A (APAM)"
    },
    {
      "value": "APB",
      "label": "Asia Pacific Fund Inc. (The) (APB)"
    },
    {
      "value": "APC",
      "label": "Anadarko Petroleum Corporation (APC)"
    },
    {
      "value": "APD",
      "label": "Air Products and Chemicals Inc. (APD)"
    },
    {
      "value": "APDN",
      "label": "Applied DNA Sciences Inc (APDN)"
    },
    {
      "value": "APDNW",
      "label": " (APDNW)"
    },
    {
      "value": "APEI",
      "label": "American Public Education Inc. (APEI)"
    },
    {
      "value": "APEN",
      "label": "Apollo Endosurgery Inc. (APEN)"
    },
    {
      "value": "APF",
      "label": "Morgan Stanley Asia-Pacific Fund Inc. (APF)"
    },
    {
      "value": "APH",
      "label": "Amphenol Corporation (APH)"
    },
    {
      "value": "APHB",
      "label": "AmpliPhi Biosciences Corporation (APHB)"
    },
    {
      "value": "APLE",
      "label": "Apple Hospitality REIT Inc. (APLE)"
    },
    {
      "value": "APLS",
      "label": "Apellis Pharmaceuticals Inc. (APLS)"
    },
    {
      "value": "APO",
      "label": "Apollo Global Management LLC Class A Representing Class A Limitied Liability Company Interests (APO)"
    },
    {
      "value": "APO-A",
      "label": "Apollo Global Management LLC 6.375% Series A Preferred Shares (APO-A)"
    },
    {
      "value": "APO-B",
      "label": "Apollo Global Management LLC 6.375% Series B Preferred Shares (APO-B)"
    },
    {
      "value": "APOG",
      "label": "Apogee Enterprises Inc. (APOG)"
    },
    {
      "value": "APOP",
      "label": "Cellect Biotechnology Ltd. (APOP)"
    },
    {
      "value": "APOPW",
      "label": "Cellect Biotechnology Ltd. Warrants to Purchase ADR (1 WT and $7.50 to purchase 1 ADS) (APOPW)"
    },
    {
      "value": "APPF",
      "label": "AppFolio Inc. (APPF)"
    },
    {
      "value": "APPN",
      "label": "Appian Corporation (APPN)"
    },
    {
      "value": "APPS",
      "label": "Digital Turbine Inc. (APPS)"
    },
    {
      "value": "APRI",
      "label": "Apricus Biosciences Inc. (APRI)"
    },
    {
      "value": "APRN",
      "label": "Blue Apron Holdings Inc. Class A (APRN)"
    },
    {
      "value": "APT",
      "label": "Alpha Pro Tech Ltd. (APT)"
    },
    {
      "value": "APTI",
      "label": "Apptio Inc. (APTI)"
    },
    {
      "value": "APTO",
      "label": "Aptose Biosciences Inc. (APTO)"
    },
    {
      "value": "APTS",
      "label": "Preferred Apartment Communities Inc. (APTS)"
    },
    {
      "value": "APTV",
      "label": "Aptiv PLC (APTV)"
    },
    {
      "value": "APTX",
      "label": "Aptinyx Inc. (APTX)"
    },
    {
      "value": "APU",
      "label": "AmeriGas Partners L.P. (APU)"
    },
    {
      "value": "APVO",
      "label": "Aptevo Therapeutics Inc. (APVO)"
    },
    {
      "value": "APWC",
      "label": "Asia Pacific Wire & Cable Corporation Limited (APWC)"
    },
    {
      "value": "APY",
      "label": "Apergy Corporation (APY)"
    },
    {
      "value": "AQ",
      "label": "Aquantia Corp. (AQ)"
    },
    {
      "value": "AQB",
      "label": "AquaBounty Technologies Inc. (AQB)"
    },
    {
      "value": "AQMS",
      "label": "Aqua Metals Inc. (AQMS)"
    },
    {
      "value": "AQN",
      "label": "Algonquin Power & Utilities Corp. (AQN)"
    },
    {
      "value": "AQST",
      "label": "Aquestive Therapeutics Inc. (AQST)"
    },
    {
      "value": "AQUA",
      "label": "Evoqua Water Technologies Corp. (AQUA)"
    },
    {
      "value": "AQXP",
      "label": "Aquinox Pharmaceuticals Inc. (AQXP)"
    },
    {
      "value": "AR",
      "label": "Antero Resources Corporation (AR)"
    },
    {
      "value": "ARA",
      "label": "American Renal Associates Holdings Inc (ARA)"
    },
    {
      "value": "ARAY",
      "label": "Accuray Incorporated (ARAY)"
    },
    {
      "value": "ARC",
      "label": "ARC Document Solutions Inc. (ARC)"
    },
    {
      "value": "ARCB",
      "label": "ArcBest Corporation (ARCB)"
    },
    {
      "value": "ARCC",
      "label": "Ares Capital Corporation (ARCC)"
    },
    {
      "value": "ARCE",
      "label": "Arco Platform Limited (ARCE)"
    },
    {
      "value": "ARCH",
      "label": "Arch Coal Inc. Class A (ARCH)"
    },
    {
      "value": "ARCI",
      "label": "Appliance Recycling Centers of America Inc. (ARCI)"
    },
    {
      "value": "ARCM",
      "label": "Arrow Reserve Capital Management (ARCM)"
    },
    {
      "value": "ARCO",
      "label": "Arcos Dorados Holdings Inc. Class A Shares (ARCO)"
    },
    {
      "value": "ARCT",
      "label": "Arcturus Therapeutics Ltd. (ARCT)"
    },
    {
      "value": "ARCW",
      "label": "ARC Group Worldwide Inc. (ARCW)"
    },
    {
      "value": "ARD",
      "label": "Ardagh Group S.A. (ARD)"
    },
    {
      "value": "ARDC",
      "label": "Ares Dynamic Credit Allocation Fund Inc. (ARDC)"
    },
    {
      "value": "ARDM",
      "label": "Aradigm Corporation (ARDM)"
    },
    {
      "value": "ARDS",
      "label": "Aridis Pharmaceuticals Inc. (ARDS)"
    },
    {
      "value": "ARDX",
      "label": "Ardelyx Inc. (ARDX)"
    },
    {
      "value": "ARE",
      "label": "Alexandria Real Estate Equities Inc. (ARE)"
    },
    {
      "value": "ARE-D",
      "label": "Alexandria Real Estate Equities Inc. 7.00% Series D Cumulative Convertible Preferred Stock (ARE-D)"
    },
    {
      "value": "ARES",
      "label": "Ares Management L.P. representing Limited Partner Interests (ARES)"
    },
    {
      "value": "ARES-A",
      "label": "Ares Management L.P. 7.00% Series A Preferred Shares Representing Limited Partner Interests (ARES-A)"
    },
    {
      "value": "AREX",
      "label": "Approach Resources Inc. (AREX)"
    },
    {
      "value": "ARGD",
      "label": "Argo Group International Holdings Ltd. 6.5% Senior Notes Due 2042 (ARGD)"
    },
    {
      "value": "ARGO",
      "label": "Argo Group International Holdings Ltd. (ARGO)"
    },
    {
      "value": "ARGT",
      "label": "Global X MSCI Argentina (ARGT)"
    },
    {
      "value": "ARGX",
      "label": "argenx SE (ARGX)"
    },
    {
      "value": "ARI",
      "label": "Apollo Commercial Real Estate Finance Inc (ARI)"
    },
    {
      "value": "ARI-C",
      "label": "Apollo Commercial Real Estate Finance 8.00% Series C Cumulative Redeemable Perpetual Preferred Stock (ARI-C)"
    },
    {
      "value": "ARII",
      "label": "American Railcar Industries Inc. (ARII)"
    },
    {
      "value": "ARKG",
      "label": "ARK Genomic Revolution Multi-Sector (ARKG)"
    },
    {
      "value": "ARKK",
      "label": "ARK Innovation (ARKK)"
    },
    {
      "value": "ARKQ",
      "label": "ARK Industrial Innovation (ARKQ)"
    },
    {
      "value": "ARKR",
      "label": "Ark Restaurants Corp. (ARKR)"
    },
    {
      "value": "ARKW",
      "label": "ARK Web x.0 (ARKW)"
    },
    {
      "value": "ARL",
      "label": "American Realty Investors Inc. (ARL)"
    },
    {
      "value": "ARLO",
      "label": "Arlo Technologies Inc. (ARLO)"
    },
    {
      "value": "ARLP",
      "label": "Alliance Resource Partners L.P. (ARLP)"
    },
    {
      "value": "ARMK",
      "label": "Aramark (ARMK)"
    },
    {
      "value": "ARNA",
      "label": "Arena Pharmaceuticals Inc. (ARNA)"
    },
    {
      "value": "ARNC",
      "label": "Arconic Inc. (ARNC)"
    },
    {
      "value": "ARNC-",
      "label": " (ARNC-)"
    },
    {
      "value": "AROC",
      "label": "Archrock Inc. (AROC)"
    },
    {
      "value": "AROW",
      "label": "Arrow Financial Corporation (AROW)"
    },
    {
      "value": "ARPO",
      "label": "Aerpio Pharmaceuticals Inc. (ARPO)"
    },
    {
      "value": "ARQL",
      "label": "ArQule Inc. (ARQL)"
    },
    {
      "value": "ARR",
      "label": "ARMOUR Residential REIT Inc. (ARR)"
    },
    {
      "value": "ARR-A",
      "label": "Armour Residential REIT INC Preferred Series A (ARR-A)"
    },
    {
      "value": "ARR-B",
      "label": "ARMOUR Residential REIT Inc. Preferred Series B (ARR-B)"
    },
    {
      "value": "ARRS",
      "label": "ARRIS International plc (ARRS)"
    },
    {
      "value": "ARRY",
      "label": "Array BioPharma Inc. (ARRY)"
    },
    {
      "value": "ARTNA",
      "label": "Artesian Resources Corporation Class A Non-Voting Common Stock (ARTNA)"
    },
    {
      "value": "ARTW",
      "label": "Art's-Way Manufacturing Co. Inc. (ARTW)"
    },
    {
      "value": "ARTX",
      "label": "Arotech Corporation (ARTX)"
    },
    {
      "value": "ARVN",
      "label": "Arvinas Inc. (ARVN)"
    },
    {
      "value": "ARVR",
      "label": "Tactile Analytics (ARVR)"
    },
    {
      "value": "ARW",
      "label": "Arrow Electronics Inc. (ARW)"
    },
    {
      "value": "ARWR",
      "label": "Arrowhead Pharmaceuticals Inc. (ARWR)"
    },
    {
      "value": "ASA",
      "label": "ASA Gold and Precious Metals Limited (ASA)"
    },
    {
      "value": "ASB",
      "label": "Associated Banc-Corp (ASB)"
    },
    {
      "value": "ASB+",
      "label": "Associated Banc-Corp Warrants (ASB+)"
    },
    {
      "value": "ASB-C",
      "label": "Associated Banc-Corp Depositary shares Series C (ASB-C)"
    },
    {
      "value": "ASB-D",
      "label": "Associated Banc-Corp Depositary Shares Series D (ASB-D)"
    },
    {
      "value": "ASB-E",
      "label": "Associated Banc-Corp Depositary Shares Series E (ASB-E)"
    },
    {
      "value": "ASC",
      "label": "Ardmore Shipping Corporation (ASC)"
    },
    {
      "value": "ASCMA",
      "label": "Ascent Capital Group Inc. Series A Common Stock (ASCMA)"
    },
    {
      "value": "ASEA",
      "label": "Global X FTSE Southeast Asia (ASEA)"
    },
    {
      "value": "ASET",
      "label": "FlexShares Real Assets Allocation Index Fund (ASET)"
    },
    {
      "value": "ASFI",
      "label": "Asta Funding Inc. (ASFI)"
    },
    {
      "value": "ASG",
      "label": "Liberty All-Star Growth Fund Inc. (ASG)"
    },
    {
      "value": "ASGN",
      "label": "ASGN Incorporated (ASGN)"
    },
    {
      "value": "ASH",
      "label": "Ashland Global Holdings Inc. (ASH)"
    },
    {
      "value": "ASHR",
      "label": "Xtrackers Harvest CSI 300 China A-Shares (ASHR)"
    },
    {
      "value": "ASHS",
      "label": "Xtrackers Harvest CSI 500 China A-Shares Small Cap (ASHS)"
    },
    {
      "value": "ASHX",
      "label": "Xtrackers MSCI China A Inclusion Equity (ASHX)"
    },
    {
      "value": "ASIX",
      "label": "AdvanSix Inc. (ASIX)"
    },
    {
      "value": "ASLN",
      "label": "ASLAN Pharmaceuticals Limited (ASLN)"
    },
    {
      "value": "ASM",
      "label": "Avino Silver & Gold Mines Ltd. (Canada) (ASM)"
    },
    {
      "value": "ASMB",
      "label": "Assembly Biosciences Inc. (ASMB)"
    },
    {
      "value": "ASML",
      "label": "ASML Holding N.V. (ASML)"
    },
    {
      "value": "ASNA",
      "label": "Ascena Retail Group Inc. (ASNA)"
    },
    {
      "value": "ASND",
      "label": "Ascendis Pharma A/S (ASND)"
    },
    {
      "value": "ASNS",
      "label": "Arsanis Inc. (ASNS)"
    },
    {
      "value": "ASPN",
      "label": "Aspen Aerogels Inc. (ASPN)"
    },
    {
      "value": "ASPS",
      "label": "Altisource Portfolio Solutions S.A. (ASPS)"
    },
    {
      "value": "ASPU",
      "label": "Aspen Group Inc. (ASPU)"
    },
    {
      "value": "ASR",
      "label": "Grupo Aeroportuario del Sureste S.A. de C.V. (ASR)"
    },
    {
      "value": "ASRT",
      "label": "Assertio Therapeutics Inc. (ASRT)"
    },
    {
      "value": "ASRV",
      "label": "AmeriServ Financial Inc. (ASRV)"
    },
    {
      "value": "ASRVP",
      "label": "AmeriServ Financial Inc. AmeriServ Financial Trust I (ASRVP)"
    },
    {
      "value": "AST",
      "label": "Asterias Biotherapeutics Inc. Common Series A (AST)"
    },
    {
      "value": "ASTC",
      "label": "Astrotech Corporation (ASTC)"
    },
    {
      "value": "ASTE",
      "label": "Astec Industries Inc. (ASTE)"
    },
    {
      "value": "ASUR",
      "label": "Asure Software Inc (ASUR)"
    },
    {
      "value": "ASV",
      "label": "ASV Holdings Inc. (ASV)"
    },
    {
      "value": "ASX",
      "label": "ASE Technology Holding Co. Ltd. American Depositary Shares (each representing Two) (ASX)"
    },
    {
      "value": "ASYS",
      "label": "Amtech Systems Inc. (ASYS)"
    },
    {
      "value": "AT",
      "label": "Atlantic Power Corporation (Canada) (AT)"
    },
    {
      "value": "ATAI",
      "label": "ATA Inc. (ATAI)"
    },
    {
      "value": "ATAX",
      "label": "America First Multifamily Investors L.P. (ATAX)"
    },
    {
      "value": "ATEC",
      "label": "Alphatec Holdings Inc. (ATEC)"
    },
    {
      "value": "ATEN",
      "label": "A10 Networks Inc. (ATEN)"
    },
    {
      "value": "ATGE",
      "label": "Adtalem Global Education Inc. (ATGE)"
    },
    {
      "value": "ATH",
      "label": "Athene Holding Ltd. Class A (ATH)"
    },
    {
      "value": "ATHM",
      "label": "Autohome Inc. American Depositary Shares each representing one class A. (ATHM)"
    },
    {
      "value": "ATHN",
      "label": "athenahealth Inc. (ATHN)"
    },
    {
      "value": "ATHX",
      "label": "Athersys Inc. (ATHX)"
    },
    {
      "value": "ATI",
      "label": "Allegheny Technologies Incorporated (ATI)"
    },
    {
      "value": "ATIS",
      "label": "Attis Industries Inc. (ATIS)"
    },
    {
      "value": "ATISW",
      "label": "Attis Industries Inc. Warrants (ATISW)"
    },
    {
      "value": "ATKR",
      "label": "Atkore International Group Inc. (ATKR)"
    },
    {
      "value": "ATLC",
      "label": "Atlanticus Holdings Corporation (ATLC)"
    },
    {
      "value": "ATLO",
      "label": "Ames National Corporation (ATLO)"
    },
    {
      "value": "ATMP",
      "label": "Barclays ETN Plus Select MLP (ATMP)"
    },
    {
      "value": "ATNI",
      "label": "ATN International Inc. (ATNI)"
    },
    {
      "value": "ATNM",
      "label": "Actinium Pharmaceuticals Inc. (Delaware) (ATNM)"
    },
    {
      "value": "ATNX",
      "label": "Athenex Inc. (ATNX)"
    },
    {
      "value": "ATO",
      "label": "Atmos Energy Corporation (ATO)"
    },
    {
      "value": "ATOM",
      "label": "Atomera Incorporated (ATOM)"
    },
    {
      "value": "ATOS",
      "label": "Atossa Genetics Inc. (ATOS)"
    },
    {
      "value": "ATR",
      "label": "AptarGroup Inc. (ATR)"
    },
    {
      "value": "ATRA",
      "label": "Atara Biotherapeutics Inc. (ATRA)"
    },
    {
      "value": "ATRC",
      "label": "AtriCure Inc. (ATRC)"
    },
    {
      "value": "ATRI",
      "label": "Atrion Corporation (ATRI)"
    },
    {
      "value": "ATRO",
      "label": "Astronics Corporation (ATRO)"
    },
    {
      "value": "ATRS",
      "label": "Antares Pharma Inc. (ATRS)"
    },
    {
      "value": "ATSG",
      "label": "Air Transport Services Group Inc (ATSG)"
    },
    {
      "value": "ATTO",
      "label": "Atento S.A. (ATTO)"
    },
    {
      "value": "ATTU",
      "label": "Attunity Ltd. (ATTU)"
    },
    {
      "value": "ATU",
      "label": "Actuant Corporation (ATU)"
    },
    {
      "value": "ATUS",
      "label": "Altice USA Inc. Class A (ATUS)"
    },
    {
      "value": "ATV",
      "label": "Acorn International Inc. ADS (ATV)"
    },
    {
      "value": "ATVI",
      "label": "Activision Blizzard Inc (ATVI)"
    },
    {
      "value": "ATXI",
      "label": "Avenue Therapeutics Inc. (ATXI)"
    },
    {
      "value": "AU",
      "label": "AngloGold Ashanti Limited (AU)"
    },
    {
      "value": "AUBN",
      "label": "Auburn National Bancorporation Inc. (AUBN)"
    },
    {
      "value": "AUDC",
      "label": "AudioCodes Ltd. (AUDC)"
    },
    {
      "value": "AUG",
      "label": "Auryn Resources Inc. (AUG)"
    },
    {
      "value": "AUGR",
      "label": "Defiance Future Tech (AUGR)"
    },
    {
      "value": "AUMN",
      "label": "Golden Minerals Company (AUMN)"
    },
    {
      "value": "AUO",
      "label": "AU Optronics Corp American Depositary Shares (AUO)"
    },
    {
      "value": "AUPH",
      "label": "Aurinia Pharmaceuticals Inc (AUPH)"
    },
    {
      "value": "AUSE",
      "label": "WisdomTree Australia Dividend Index (AUSE)"
    },
    {
      "value": "AUSF",
      "label": "Global X Funds Adaptive U.S. Factor (AUSF)"
    },
    {
      "value": "AUTL",
      "label": "Autolus Therapeutics plc (AUTL)"
    },
    {
      "value": "AUTO",
      "label": "AutoWeb Inc. (AUTO)"
    },
    {
      "value": "AUY",
      "label": "Yamana Gold Inc. (Canada) (AUY)"
    },
    {
      "value": "AVA",
      "label": "Avista Corporation (AVA)"
    },
    {
      "value": "AVAL",
      "label": "Grupo Aval Acciones y Valores S.A. ADR (Each representing 20 preferred shares) (AVAL)"
    },
    {
      "value": "AVAV",
      "label": "AeroVironment Inc. (AVAV)"
    },
    {
      "value": "AVB",
      "label": "AvalonBay Communities Inc. (AVB)"
    },
    {
      "value": "AVD",
      "label": "American Vanguard Corporation ($0.10 Par Value) (AVD)"
    },
    {
      "value": "AVDL",
      "label": "Avadel Pharmaceuticals plc (AVDL)"
    },
    {
      "value": "AVEO",
      "label": "AVEO Pharmaceuticals Inc. (AVEO)"
    },
    {
      "value": "AVGO",
      "label": "Broadcom Inc. (AVGO)"
    },
    {
      "value": "AVGR",
      "label": "Avinger Inc. (AVGR)"
    }
];

export default formattedSearchData;