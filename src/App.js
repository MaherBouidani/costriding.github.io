import React, { useState } from "react";

const LandingPage = () => {
  // State to hold the selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Messages corresponding to the dropdown options
  const messages = {
    "Ontario": "Number of Private Households: 5,491,190, Cost Per Riding: $2,196,476,000.00",
    "Ajax": "Number of Private Households: 39,490, Cost Per Riding: $15,796,000.00",
    "Algoma-Manitoulin": "Number of Private Households: 31,900, Cost Per Riding: $12,760,000.00",
    "Aurora-Oak Ridges-Richmond Hill": "Number of Private Households: 37,570, Cost Per Riding: $15,028,000.00",
    "Barrie-Innisfil": "Number of Private Households: 42,485, Cost Per Riding: $16,994,000.00",
    "Barrie-Springwater-Oro-Medonte": "Number of Private Households: 41,320, Cost Per Riding: $16,528,000.00",
    "Bay of Quinte": "Number of Private Households: 49,810, Cost Per Riding: $19,924,000.00",
    "Beaches-East York": "Number of Private Households: 45,720, Cost Per Riding: $18,288,000.00",
    "Brampton Centre": "Number of Private Households: 34,325, Cost Per Riding: $13,730,000.00",
    "Brampton East": "Number of Private Households: 30,480, Cost Per Riding: $12,192,000.00",
    "Brampton North": "Number of Private Households: 34,725, Cost Per Riding: $13,890,000.00",
    "Brampton South": "Number of Private Households: 41,050, Cost Per Riding: $16,420,000.00",
    "Brampton West": "Number of Private Households: 41,890, Cost Per Riding: $16,756,000.00",
    "Brantford-Brant": "Number of Private Households: 54,540, Cost Per Riding: $21,816,000.00",
    "Bruce-Grey-Owen Sound": "Number of Private Households: 47,670, Cost Per Riding: $19,068,000.00",
    "Burlington": "Number of Private Households: 51,920, Cost Per Riding: $20,768,000.00",
    "Cambridge": "Number of Private Households: 45,565, Cost Per Riding: $18,226,000.00",
    "Carleton": "Number of Private Households: 45,695, Cost Per Riding: $18,278,000.00",
    "Chatham-Kent-Leamington": "Number of Private Households: 46,225, Cost Per Riding: $18,490,000.00",
    "Davenport": "Number of Private Households: 45,755, Cost Per Riding: $18,302,000.00",
    "Don Valley East": "Number of Private Households: 38,300, Cost Per Riding: $15,320,000.00",
    "Don Valley North": "Number of Private Households: 45,785, Cost Per Riding: $18,314,000.00",
    "Don Valley West": "Number of Private Households: 39,720, Cost Per Riding: $15,888,000.00",
    "Dufferin-Caledon": "Number of Private Households: 47,010, Cost Per Riding: $18,804,000.00",
    "Durham": "Number of Private Households: 51,385, Cost Per Riding: $20,554,000.00",
    "Eglinton-Lawrence": "Number of Private Households: 45,895, Cost Per Riding: $18,358,000.00",
    "Elgin-Middlesex-London": "Number of Private Households: 48,715, Cost Per Riding: $19,486,000.00",
    "Essex": "Number of Private Households: 49,710, Cost Per Riding: $19,884,000.00",
    "Etobicoke Centre": "Number of Private Households: 45,250, Cost Per Riding: $18,100,000.00",
    "Etobicoke-Lakeshore": "Number of Private Households: 65,580, Cost Per Riding: $26,232,000.00",
    "Etobicoke North": "Number of Private Households: 38,220, Cost Per Riding: $15,288,000.00",
    "Flamborough-Glanbrook": "Number of Private Households: 42,620, Cost Per Riding: $17,048,000.00",
    "Glengarry-Prescott-Russell": "Number of Private Households: 46,590, Cost Per Riding: $18,636,000.00",
    "Guelph": "Number of Private Households: 56,345, Cost Per Riding: $22,538,000.00",
    "Haldimand-Norfolk": "Number of Private Households: 46,315, Cost Per Riding: $18,526,000.00",
    "Haliburton-Kawartha Lakes-Brock": "Number of Private Households: 50,765, Cost Per Riding: $20,306,000.00",
    "Hamilton Centre": "Number of Private Households: 50,025, Cost Per Riding: $20,010,000.00",
    "Hamilton East-Stoney Creek": "Number of Private Households: 45,345, Cost Per Riding: $18,138,000.00",
    "Hamilton Mountain": "Number of Private Households: 40,680, Cost Per Riding: $16,272,000.00",
    "Hamilton West-Ancaster-Dundas": "Number of Private Households: 44,140, Cost Per Riding: $17,656,000.00",
    "Hastings-Lennox and Addington": "Number of Private Households: 40,565, Cost Per Riding: $16,226,000.00",
    "Humber River-Black Creek": "Number of Private Households: 37,735, Cost Per Riding: $15,094,000.00",
    "Huron-Bruce": "Number of Private Households: 46,740, Cost Per Riding: $18,696,000.00",
    "Kanata-Carleton": "Number of Private Households: 42,055, Cost Per Riding: $16,822,000.00",
    "Kenora-Rainy River": "Number of Private Households: 22,210, Cost Per Riding: $8,884,000.00",
    "King-Vaughan": "Number of Private Households: 44,090, Cost Per Riding: $17,636,000.00",
    "Kingston and the Islands": "Number of Private Households: 55,810, Cost Per Riding: $22,324,000.00",
    "Kitchener Centre": "Number of Private Households: 49,540, Cost Per Riding: $19,816,000.00",
    "Kitchener-Conestoga": "Number of Private Households: 36,015, Cost Per Riding: $14,406,000.00",
    "Kitchener South-Hespeler": "Number of Private Households: 42,805, Cost Per Riding: $17,122,000.00",
    "Lambton-Kent-Middlesex": "Number of Private Households: 43,980, Cost Per Riding: $17,592,000.00",
    "Lanark-Frontenac-Kingston": "Number of Private Households: 46,085, Cost Per Riding: $18,434,000.00",
    "Leeds-Grenville-Thousand Islands and Rideau Lakes": "Number of Private Households: 44,635, Cost Per Riding: $17,854,000.00",
    "London-Fanshawe": "Number of Private Households: 49,810, Cost Per Riding: $19,924,000.00",
    "London North Centre": "Number of Private Households: 61,660, Cost Per Riding: $24,664,000.00",
    "London West": "Number of Private Households: 56,935, Cost Per Riding: $22,774,000.00",
    "Markham-Stouffville": "Number of Private Households: 43,880, Cost Per Riding: $17,552,000.00",
    "Markham-Thornhill": "Number of Private Households: 29,645, Cost Per Riding: $11,858,000.00",
    "Markham-Unionville": "Number of Private Households: 42,840, Cost Per Riding: $17,136,000.00",
    "Milton": "Number of Private Households: 41,355, Cost Per Riding: $16,542,000.00",
    "Mississauga Centre": "Number of Private Households: 47,095, Cost Per Riding: $18,838,000.00",
    "Mississauga East-Cooksville": "Number of Private Households: 42,475, Cost Per Riding: $16,990,000.00",
    "Mississauga-Erin Mills": "Number of Private Households: 39,020, Cost Per Riding: $15,608,000.00",
    "Mississauga-Lakeshore": "Number of Private Households: 44,660, Cost Per Riding: $17,864,000.00",
    "Mississauga-Malton": "Number of Private Households: 34,830, Cost Per Riding: $13,932,000.00",
    "Mississauga-Streetsville": "Number of Private Households: 36,490, Cost Per Riding: $14,596,000.00",
    "Nepean": "Number of Private Households: 45,670, Cost Per Riding: $18,268,000.00",
    "Newmarket-Aurora": "Number of Private Households: 43,695, Cost Per Riding: $17,478,000.00",
    "Niagara Centre": "Number of Private Households: 49,270, Cost Per Riding: $19,708,000.00",
    "Niagara Falls": "Number of Private Households: 59,730, Cost Per Riding: $23,892,000.00",
    "Niagara West": "Number of Private Households: 36,465, Cost Per Riding: $14,586,000.00",
    "Nickel Belt": "Number of Private Households: 34,245, Cost Per Riding: $13,698,000.00",
    "Nipissing": "Number of Private Households: 33,245, Cost Per Riding: $13,298,000.00",
    "Northumberland-Peterborough South": "Number of Private Households: 48,300, Cost Per Riding: $19,320,000.00",
    "Oakville": "Number of Private Households: 44,505, Cost Per Riding: $17,802,000.00",
    "Oakville North-Burlington": "Number of Private Households: 49,000, Cost Per Riding: $19,600,000.00",
    "Orléans": "Number of Private Households: 50,295, Cost Per Riding: $20,118,000.00",
    "Oshawa": "Number of Private Households: 53,270, Cost Per Riding: $21,308,000.00",
    "Ottawa Centre": "Number of Private Households: 64,760, Cost Per Riding: $25,904,000.00",
    "Ottawa South": "Number of Private Households: 50,185, Cost Per Riding: $20,074,000.00",
    "Ottawa-Vanier": "Number of Private Households: 55,450, Cost Per Riding: $22,180,000.00",
    "Ottawa West-Nepean": "Number of Private Households: 49,305, Cost Per Riding: $19,722,000.00",
    "Oxford": "Number of Private Households: 48,980, Cost Per Riding: $19,592,000.00",
    "Parkdale-High Park": "Number of Private Households: 49,440, Cost Per Riding: $19,776,000.00",
    "Parry Sound-Muskoka": "Number of Private Households: 45,715, Cost Per Riding: $18,286,000.00",
    "Perth-Wellington": "Number of Private Households: 44,220, Cost Per Riding: $17,688,000.00",
    "Peterborough-Kawartha": "Number of Private Households: 53,430, Cost Per Riding: $21,372,000.00",
    "Pickering-Uxbridge": "Number of Private Households: 41,435, Cost Per Riding: $16,574,000.00",
    "Renfrew-Nipissing-Pembroke": "Number of Private Households: 45,480, Cost Per Riding: $18,192,000.00",
    "Richmond Hill": "Number of Private Households: 43,545, Cost Per Riding: $17,418,000.00",
    "St. Catharines": "Number of Private Households: 50,450, Cost Per Riding: $20,180,000.00",
    "Sarnia-Lambton": "Number of Private Households: 46,350, Cost Per Riding: $18,540,000.00",
    "Sault Ste. Marie": "Number of Private Households: 32,530, Cost Per Riding: $13,012,000.00",
    "Scarborough-Agincourt": "Number of Private Households: 38,340, Cost Per Riding: $15,336,000.00",
    "Scarborough Centre": "Number of Private Households: 40,560, Cost Per Riding: $16,224,000.00",
    "Scarborough-Guildwood": "Number of Private Households: 36,175, Cost Per Riding: $14,470,000.00",
    "Scarborough North": "Number of Private Households: 29,485, Cost Per Riding: $11,794,000.00",
    "Scarborough-Rouge Park": "Number of Private Households: 32,435, Cost Per Riding: $12,974,000.00",
    "Scarborough Southwest": "Number of Private Households: 41,935, Cost Per Riding: $16,774,000.00",
    "Simcoe-Grey": "Number of Private Households: 59,540, Cost Per Riding: $23,816,000.00",
    "Simcoe North": "Number of Private Households: 50,415, Cost Per Riding: $20,166,000.00",
    "Spadina-Fort York": "Number of Private Households: 80,640, Cost Per Riding: $32,256,000.00",
    "Stormont-Dundas-South Glengarry": "Number of Private Households: 44,255, Cost Per Riding: $17,702,000.00",
    "Sudbury": "Number of Private Households: 39,005, Cost Per Riding: $15,602,000.00",
    "Thornhill": "Number of Private Households: 41,845, Cost Per Riding: $16,738,000.00",
    "Thunder Bay-Atikokan": "Number of Private Households: 32,745, Cost Per Riding: $13,098,000.00",
    "Thunder Bay-Superior North": "Number of Private Households: 32,085, Cost Per Riding: $12,834,000.00",
    "Timiskaming-Cochrane": "Number of Private Households: 29,800, Cost Per Riding: $11,920,000.00",
    "Timmins": "Number of Private Households: 17,885, Cost Per Riding: $7,154,000.00",
    "Toronto Centre": "Number of Private Households: 68,980, Cost Per Riding: $27,592,000.00",
    "Toronto-Danforth": "Number of Private Households: 46,195, Cost Per Riding: $18,478,000.00",
    "Toronto-St. Paul's": "Number of Private Households: 58,395, Cost Per Riding: $23,358,000.00",
    "University-Rosedale": "Number of Private Households: 53,550, Cost Per Riding: $21,420,000.00",
    "Vaughan-Woodbridge": "Number of Private Households: 34,665, Cost Per Riding: $13,866,000.00",
    "Waterloo": "Number of Private Households: 49,110, Cost Per Riding: $19,644,000.00",
    "Wellington-Halton Hills": "Number of Private Households: 45,845, Cost Per Riding: $18,338,000.00",
    "Whitby": "Number of Private Households: 46,460, Cost Per Riding: $18,584,000.00",
    "Willowdale": "Number of Private Households: 50,560, Cost Per Riding: $20,224,000.00",
    "Windsor-Tecumseh": "Number of Private Households: 51,415, Cost Per Riding: $20,566,000.00",
    "Windsor West": "Number of Private Households: 51,805, Cost Per Riding: $20,722,000.00",
    "York Centre": "Number of Private Households: 41,195, Cost Per Riding: $16,478,000.00",
    "York-Simcoe": "Number of Private Households: 42,675, Cost Per Riding: $17,070,000.00",
    "York South-Weston": "Number of Private Households: 45,050, Cost Per Riding: $18,020,000.00",
    "Kiiwetinoong": "Number of Private Households: 9,135, Cost Per Riding:  $3,654,000.00 ",
    "Mushkegowuk": "Number of Private Households: 10,560,  Cost Per Riding:  $4,224,000.00",
  };
  // Handle dropdown change
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    // <div style={{ textAlign: "center", marginTop: "50px" }}>
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        color:"white",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <h1>Welcome to Riding/Cost Looker</h1>
      <p>Select Your Riding:</p>

      {/* Dropdown menu */}
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          outline: "none",
        }}
      >
        <option value="">-- Choose Your Riding --</option>
        <option value="Ontario">Ontario</option>
        <option value="Ajax">Ajax</option>
        <option value="Algoma-Manitoulin">Algoma-Manitoulin</option>
        <option value="Aurora-Oak Ridges-Richmond Hill">Aurora-Oak Ridges-Richmond Hill</option>
        <option value="Barrie-Innisfil">Barrie-Innisfil</option>
        <option value="Barrie-Springwater-Oro-Medonte">Barrie-Springwater-Oro-Medonte</option>
        <option value="Bay of Quinte">Bay of Quinte</option>
        <option value="Beaches-East York">Beaches-East York</option>
        <option value="Brampton Centre">Brampton Centre</option>
        <option value="Brampton East">Brampton East</option>
        <option value="Brampton North">Brampton North</option>
        <option value="Brampton South">Brampton South</option>
        <option value="Brampton West">Brampton West</option>
        <option value="Brantford-Brant">Brantford-Brant</option>
        <option value="Bruce-Grey-Owen Sound">Bruce-Grey-Owen Sound</option>
        <option value="Burlington">Burlington</option>
        <option value="Cambridge">Cambridge</option>
        <option value="Carleton">Carleton</option>
        <option value="Chatham-Kent-Leamington">Chatham-Kent-Leamington</option>
        <option value="Davenport">Davenport</option>
        <option value="Don Valley East">Don Valley East</option>
        <option value="Don Valley North">Don Valley North</option>
        <option value="Don Valley West">Don Valley West</option>
        <option value="Dufferin-Caledon">Dufferin-Caledon</option>
        <option value="Durham">Durham</option>
        <option value="Eglinton-Lawrence">Eglinton-Lawrence</option>
        <option value="Elgin-Middlesex-London">Elgin-Middlesex-London</option>
        <option value="Essex">Essex</option>
        <option value="Etobicoke Centre">Etobicoke Centre</option>
        <option value="Etobicoke-Lakeshore">Etobicoke-Lakeshore</option>
        <option value="Etobicoke North">Etobicoke North</option>
        <option value="Flamborough-Glanbrook">Flamborough-Glanbrook</option>
        <option value="Glengarry-Prescott-Russell">Glengarry-Prescott-Russell</option>
        <option value="Guelph">Guelph</option>
        <option value="Haldimand-Norfolk">Haldimand-Norfolk</option>
        <option value="Haliburton-Kawartha Lakes-Brock">Haliburton-Kawartha Lakes-Brock</option>
        <option value="Hamilton Centre">Hamilton Centre</option>
        <option value="Hamilton East-Stoney Creek">Hamilton East-Stoney Creek</option>
        <option value="Hamilton Mountain">Hamilton Mountain</option>
        <option value="Hamilton West-Ancaster-Dundas">Hamilton West-Ancaster-Dundas</option>
        <option value="Hastings-Lennox and Addington">Hastings-Lennox and Addington</option>
        <option value="Humber River-Black Creek">Humber River-Black Creek</option>
        <option value="Huron-Bruce">Huron-Bruce</option>
        <option value="Kanata-Carleton">Kanata-Carleton</option>
        <option value="Kenora-Rainy River">Kenora-Rainy River</option>
        <option value="King-Vaughan">King-Vaughan</option>
        <option value="Kingston and the Islands">Kingston and the Islands</option>
        <option value="Kitchener Centre">Kitchener Centre</option>
        <option value="Kitchener-Conestoga">Kitchener-Conestoga</option>
        <option value="Kitchener South-Hespeler">Kitchener South-Hespeler</option>
        <option value="Lambton-Kent-Middlesex">Lambton-Kent-Middlesex</option>
        <option value="Lanark-Frontenac-Kingston">Lanark-Frontenac-Kingston</option>
        <option value="Leeds-Grenville-Thousand Islands and Rideau Lakes">Leeds-Grenville-Thousand Islands and Rideau Lakes</option>
        <option value="London-Fanshawe">London-Fanshawe</option>
        <option value="London North Centre">London North Centre</option>
        <option value="London West">London West</option>
        <option value="Markham-Stouffville">Markham-Stouffville</option>
        <option value="Markham-Thornhill">Markham-Thornhill</option>
        <option value="Markham-Unionville">Markham-Unionville</option>
        <option value="Milton">Milton</option>
        <option value="Mississauga Centre">Mississauga Centre</option>
        <option value="Mississauga East-Cooksville">Mississauga East-Cooksville</option>
        <option value="Mississauga-Erin Mills">Mississauga-Erin Mills</option>
        <option value="Mississauga-Lakeshore">Mississauga-Lakeshore</option>
        <option value="Mississauga-Malton">Mississauga-Malton</option>
        <option value="Mississauga-Streetsville">Mississauga-Streetsville</option>
        <option value="Nepean">Nepean</option>
        <option value="Newmarket-Aurora">Newmarket-Aurora</option>
        <option value="Niagara Centre">Niagara Centre</option>
        <option value="Niagara Falls">Niagara Falls</option>
        <option value="Niagara West">Niagara West</option>
        <option value="Nickel Belt">Nickel Belt</option>
        <option value="Nipissing">Nipissing</option>
        <option value="Northumberland-Peterborough South">Northumberland-Peterborough South</option>
        <option value="Oakville">Oakville</option>
        <option value="Oakville North-Burlington">Oakville North-Burlington</option>
        <option value="OrlA©ans">OrlA©ans</option>
        <option value="Oshawa">Oshawa</option>
        <option value="Ottawa Centre">Ottawa Centre</option>
        <option value="Ottawa South">Ottawa South</option>
        <option value="Ottawa-Vanier">Ottawa-Vanier</option>
        <option value="Ottawa West-Nepean">Ottawa West-Nepean</option>
        <option value="Oxford">Oxford</option>
        <option value="Parkdale-High Park">Parkdale-High Park</option>
        <option value="Parry Sound-Muskoka">Parry Sound-Muskoka</option>
        <option value="Perth-Wellington">Perth-Wellington</option>
        <option value="Peterborough-Kawartha">Peterborough-Kawartha</option>
        <option value="Pickering-Uxbridge">Pickering-Uxbridge</option>
        <option value="Renfrew-Nipissing-Pembroke">Renfrew-Nipissing-Pembroke</option>
        <option value="Richmond Hill">Richmond Hill</option>
        <option value="St. Catharines">St. Catharines</option>
        <option value="Sarnia-Lambton">Sarnia-Lambton</option>
        <option value="Sault Ste. Marie">Sault Ste. Marie</option>
        <option value="Scarborough-Agincourt">Scarborough-Agincourt</option>
        <option value="Scarborough Centre">Scarborough Centre</option>
        <option value="Scarborough-Guildwood">Scarborough-Guildwood</option>
        <option value="Scarborough North">Scarborough North</option>
        <option value="Scarborough-Rouge Park">Scarborough-Rouge Park</option>
        <option value="Scarborough Southwest">Scarborough Southwest</option>
        <option value="Simcoe-Grey">Simcoe-Grey</option>
        <option value="Simcoe North">Simcoe North</option>
        <option value="Spadina-Fort York">Spadina-Fort York</option>
        <option value="Stormont-Dundas-South Glengarry">Stormont-Dundas-South Glengarry</option>
        <option value="Sudbury">Sudbury</option>
        <option value="Thornhill">Thornhill</option>
        <option value="Thunder Bay-Atikokan">Thunder Bay-Atikokan</option>
        <option value="Thunder Bay-Superior North">Thunder Bay-Superior North</option>
        <option value="Timiskaming-Cochrane">Timiskaming-Cochrane</option>
        <option value="Timmins">Timmins</option>
        <option value="Toronto Centre">Toronto Centre</option>
        <option value="Toronto-Danforth">Toronto-Danforth</option>
        <option value="Toronto-St. Paul's">Toronto-St. Paul's</option>
        <option value="University-Rosedale">University-Rosedale</option>
        <option value="Vaughan-Woodbridge">Vaughan-Woodbridge</option>
        <option value="Waterloo">Waterloo</option>
        <option value="Wellington-Halton Hills">Wellington-Halton Hills</option>
        <option value="Whitby">Whitby</option>
        <option value="Willowdale">Willowdale</option>
        <option value="Windsor-Tecumseh">Windsor-Tecumseh</option>
        <option value="Windsor West">Windsor West</option>
        <option value="York Centre">York Centre</option>
        <option value="York-Simcoe">York-Simcoe</option>
        <option value="York South-Weston">York South-Weston</option>
        <option value="Kiiwetinoong">Kiiwetinoong</option>
        <option value="Mushkegowuk">Mushkegowuk</option>
      </select>

      {/* Display message based on the selection */}
      <div style={{ color:"white", marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        {selectedOption && messages[selectedOption]}
      </div>
    </div>
  );
};

export default LandingPage;

