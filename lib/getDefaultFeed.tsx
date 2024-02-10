const getDefaultFeed = async () => {
  const tokens = [
    {
      name: "sol siete",
      tokenId: 2,
      description: "",
      image: "images/sol.png",
      animation_url: "/videos/sol.mov",
      content: {
        mime: "video/mp4",
        uri: "/videos/sol.mov",
      },
    },
    // {
    //   name: "paula pazos",
    //   tokenId: 3,
    //   description: "",
    //   image: "ipfs://bafybeig2cv6uohbowz2wuob74gg2xfxpoycf3ngltowmrpjk4kuincslwi",
    //   animation_url: "ipfs://bafybeiartu6yn5wo2y24vr242vhb4fstocegvvsul6dqenyv5yyafkr24i",
    //   content: {
    //     mime: "video/quicktime",
    //     uri: "ipfs://bafybeiartu6yn5wo2y24vr242vhb4fstocegvvsul6dqenyv5yyafkr24i",
    //   },
    //   attributes: [],
    // },
    // {
    //   name: "0xgonzalo",
    //   tokenId: 4,
    //   description: "",
    //   image: "ipfs://bafybeigtxgw2mqys4xcnxlijqfr2wweeacxmkvqdyludanu73675xomloe",
    //   animation_url: "ipfs://bafybeihn44ubo4jhlaj3kjft3a4df3t6tukhzw74xvbk4eo4c2p5h32itq",
    //   content: {
    //     mime: "video/mp4",
    //     uri: "ipfs://bafybeihn44ubo4jhlaj3kjft3a4df3t6tukhzw74xvbk4eo4c2p5h32itq",
    //   },
    // },
  ]
  return tokens
}

export default getDefaultFeed
