import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="5345i356"
          title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
          price={275.25}
          rating={4}
          image="data:image/webp;base64,UklGRlASAABXRUJQVlA4IEQSAAAwVACdASqLACwBPrFGm0YkIiOUytbMRAsE9JZgHyVZaPh+8wYgAM6dzVsmPIH2ff6jw98s/ujQAyv9h+px2x/v/XL/Hf87xF/b/4j0CPX/+d4LG0HoHd4P+H4bOpr329gD9S+PG+2f9j2Bf5z/fv/N/k/Zd/8f9B6YPrT/2/6T4Ff2E60/7q+y4gtscfJJAjfQ2juhc/BwkgNCWcyaes3eY8YXdb3za4np1YO6S0wmR2eb8QmSFiCLUMCOvHRnlKQAF7JQj6Zy00PMZsjWhleF1IfqVgTj/yd+cLRxD2Uc2KOv67A03urqEpobINzBGFb9Rkx1IGKFpfXLQbYqS8r8VN8EnwhDDJ+vEL6GEr3w4bsEWL9e2vG4Ojc0VnV8LQZxf49yV3FwKVRbNPUx+A0Yf7reJ3J9uElzFDmeXuPhKEjVJb6+ucL6GpzMXacvdR5TALnkqcyVR0XlgJcP2rD35QTu0t0Dk8wIbEyCDDBCmYW6ESEVmGEG6VdJaKOgK4sFEg8gVgRyTDrAwgQf/QB4EWqbLPlUnFzPkzaJNRE/XCi7CH8k1q4nymeGfZfU5guqrvJBMkMLIhR6kBDrQlYHetNqNlIZEpoTLMymlNawfbJULhsuYLDIBBoNTIIRXrrRcYFGY0w30SOwHsPc0tALs1wEzxQO124o6Va1Ah12BiohQ38HNhY980j+BfSDLQ9vHFimDujcOPisfpdcvkYMJP8qNCYrYIDEUhystZVKYDS54C+tTEJoexPRyQnMRbDms5inp3Id8LJYh/yjn2EjBPABW2/ib8je/EwsMl10QRZDkPM2XBanKF+f0FD8HjVM56+2A9eTpPOL4xn7SEVAtaU54L5U521Dc88QhvwSrg7xLEvBpCg+coQIkCCIxktdUU9OpczDduUAAP7+36vHlucJU8aBSugyQpGZVv7ZK38vR7uQOm1UtmM6JjHbMqgfwXUwI5fPKDl6gw5b45TmFh47GPyNGfCMT3Hk+sgydblaEG7xz3sum+LesXyiFXNPapI7FjRdQDhW19u7lXEHgPLLRmbeAaW9W2SVcjjJUk/5vqK/AePeJi4wRphiR2Z9G4QTSTOyKeZeNBX2A4LguHuRsIPcY/Uk3GzzPySR4QQ4+QknnmuNVmEUmX2iEQ9koXECl/3xRAN7+o+JUZQeCCiohA3ta+H7j/Lg1HWUX0CtwquYnEVteXt2kQYmkLTlY+MUgwF/HuC4BMp0otn/g0zN7hJVi517OrkOjALP6ud7r89HYGBy/QYgrT67vedt80TqV7dLsyo/e8Tk6iMh2K0jHgfaAc/T8h8k2OeqajCuXoWLFEHxZkCmyom7cc1TS4aIeuEBIt/8UX77wyCxtZ0R3Fji7gOMU/ibYzlOEKMna8uTzdQtAmKSzlMmluIKk5POTYOjQEB3uR/2n3enMEsLl3uaTDGRJwt/429EomdouzLd2GQ8HjdD8MQtRFNvSGh1uvwoArTqGnhYqPofyypdkxb+81sYu2a9tCRG5VJfFW7t3Ngmeud9/kxvwu6KgZOLrW8RBBQaleH9lBRDTRB8jmOW+YcFNvz+iZX2OFs+HvJg6pw3kbEPt7/OTAuSYGrlknLO2h9RdkialGoI1MXNr0CcY93NrHxYG0W1hTh0OxkfeeG1fzeQZhBg1VVXtfrL4mfU/y3UV2mcTcDkrPmT2VCPqU+tEfvgoVOVmFw6KQW8HYTqlaDNfsG2uWZ3soNFMn17CWrVN5SGnK7LVmzbQYwolcgETmF1e1+jvMK2LAVVx6321393YNMFQI5QmYfVmFTNTMVnjrbR21KboIXBSkHutylYUHZwTQFT5eDGUbL5Ro9BdqrWsUTbStNx5uTVuiUocH+ToCq8yyjwF8J70k7oCssBJG/WLs922MT+ozyQKzj8RT4VUaA7/BGaPu/ETFoAjI1mTRXvrttdXiJXqI/KvEtr/YjMLeH6mC+IWRpcrtv9LpmAduixFlLT49sp3AkekN8l6OG6HfYnYvSlwF4bTlAxLASOAqyQtQM9g8zhLTDR0rXe+UiVwy/Ny9em3xkG5NRMjLk53/hQrH8JadgO8VJQzn5zlfhvuXrNJY5lLWkJuOrbEpYalOgl3l9yW27gP/3a8w22qNGcsOo1sXETLAxXczs6Z+F9Pw7K2RS8OmzzSHlfUFg7KUoX9Wg/mbPjwx7SKdoLgSk4f+qyeBdtlgION+iQrbrNFvimbmSu6ZEjpwYyT3ebgX0YXe5NP4KlzOH/8zSgFUz112VQ1njbt58f/rUvt8Ark5wnv3bkt4Yj1XOqZ29Mrqrh0XdwFyrH72kmNQIaGq0ELdOhLOd6flmdwWVPiAo/WzGUpC8FWjvvynTxScJuaf5mNeCj9pDXICQbq58tCfWide+9kuez9ojMeljv9HB80CM+EIHnz1CnO4fZ0WXIXgeBYVqAbd9BK6lKtL448CyDvCQMdnu1NAgYduw//E6b9QUzMbmp0k9qCTd/OtbHOm4XPnACXA0aIjVL2exsmwzrQZ21vjccF2QIZab8MMuabFfXhFZf254DLqpXFCI62tQ1QlHKn3MF54vJAqRpBVqdi4UFYUQodtjZ78JD4B3PE3WKvs4f7VMO+YT7u/eGT8K34chClTu721MTwMFqn3PaVNOO+S0gR+K9M+39ygm6eknk+ZmhynHCu9rcvBj6iukgXGIy1MkNfpLESv2DFUa4Prj+L9ObspFxP09Gujne+4QzzMEjhZ0dloefg3ocMuT4L216Yb2nevrW6n7fUZX5D2rzenK7XntRCtfKw7CCoVtEeefpBTe3Y+ILHzlyVOfKQ8JHIJiNFwP2IzON0srDACrTlJAR1vOQDCTBNa4waE4lWfEeOO6vi/u5rFAWZ8Ex3xr/D6ka/HLnKrKrs64Eybv8zVnjk3Xx0Kq2Zb+aAHVgZGJVKkVX+NDEhqIsdmwPT5rovCTTA14QD36MfNFm/x0hLmaNoB45QzPKzIDga/MaiNr9Q6KP1mBDosy6FmUv/6l7/kU5RETxxfeDJh2gPYOjMBPV1Iy3DYozFbj3DgZCwdM1RlzFDWSwvlm6jE/PiemCIVgGow8qTuJmx3jRb0ngJsxq8yoDXoiylDT496w9q5pYhU5XrR21k9dWxO7TyKZlLCBo0oj/hYxZEixvLauvnd3eLrOud3pw0ewNQSOfIfz9FF4d2+CMKo82skJ1MhRoXT1F2RHS3Ac03pFJXr8fVUE2EYu8DjFcpNWILYwsDmuP8Mfp16569Lkv0+zVl5LmynubmnRfQGtD/SgIxHuUtI2xhAe9/vlxyNE1g82i/xNqTs0bvfMSVRIsBt5v1ndpOeDOxmum81BoGaqEnJbJfUODSflqD3XX5xthubNSRkLTuIzgnvo5syvP2JCa0WLxu7TJrjgyg8pbc0oTMPxSdY8t9W0YTEZalLCxnWD51/Wg0ppVeMNb7/YUnjRg5nbnklaslqcJiIsTMjWB85WwOgsowV+85wpf2wbMbymRmcWfct9MaPp+cBR37J2Gz94Jz5wIiR9gJZyNCIqrnX3HtF1vbacA+D6S+G5p2m/Vh8CPm8VKuhHFxuXBkf8vn7r9BgC2qt0TGnLS5D73U0OKnHh64vvnJ3I1M0FnqFo5jSwx9wz1ezGr0WK1o364x+HPLiouzZMq9U9W8Dq4qWgJjTYtDu7wDWXgm8oJYrAsAQHWr54jVDbn3gkqz5UGnlSpr8OPdGqgM7ljcUhg7t/SFOi3wqa96YbcwJowubYGmAS/buvKx9t6aY+ijLIR14CjhglCTf95KtdN9A0EGNTgdpKqFF6mzO7LYd2hPKTKY+uTJk3AysUVcig/UntX7YBby2/qPIaNiNpk0MqoGMFt6aZ/R3d214Z6rnznabfvtdoB0uL7b8M4ek3XwXRjKeT2tbsXO3nDVvePBucGx0e7jmzNQgS9UUT4wd6XcLDmLj/oQBft2g98+nZsJGo+IrzGoAmRz54IZwZ0Di7eBrGbbMzFqlvA36UxTo7lKEGxqH0nBD/wNuShoO58rkvMKRnloPWurq2/n/MCKvLl+v5cT1ZTzY9ClKKtcEgggoD2eT4YbuH0BSbu3eMQuXE9RzvxIFpJswPUo8mQopBOsjOkOq03UFTtcrL/dFhsvc4ImP2VBGzO7ikvNGmV6DuAeuDOYAzykm+A922yyvujiGicMZUKdeXPpfq1pH524LgetxfGBLUJvl6+lwYXrPFOS8HGd0RmM2wEPBuWyOoW36GVtY9/PwKJCIyaTmROCOMjtroISkcdDomDx1wDs7iGdS4r5spDDejkz3B4uaboPGEqAuypCP0LJqmSwubuCFavPeqOjm+frb2iZ4BkRFjWCWEOo1v1Z3FSIT8kacVZR82XiKfzY/KoBa3Z5qa1fc26ORgZTsrSSS5CIUPpm6bCriFxxCPX5F9Blo/OS7SaPau3rhqygDpMYpDHmbK65lI2qoVS4K2H7tdl77n2ft5pQhit2xWPPI7PZu3QTD6SmRsoenvzoaPrq9NBDFY6pJL0oq+Z/ANFTDhz36OT6aFwgU1ZyTmzfVrhuSbGayZN9te4unavFq51XiCZw3zfT8DindZgThGoWig0+my411RbYXgcxrwQvYAxYfHPiPH6ijBHZ37+f5rJQwpxNGmrNyhUug8R+h2OFDMUtPeGEe4emsqjLimOJvA3ei8wxw1lWXGoZTLmigOqL2hblVsZQv4RWPtncXRCnW/dz2sZjTwUakyDefUT5UmcfFJkMUu5GzvbZbgig/liaixpa5g3SScyCbg19MKcOZEf13VPcH6UdnMbAXpN5gsZ7mFcnD+CWSxPgutZnaTjFx3y+Zcj/VAQCKrkohOvS42KM5HfhfyKOqglLexry3xuN5JtUSRJU5ppM/pJLnX29ht1gIAx+ktU845rn3kc8c7/s+lgpUv+72fyqR28m7aJqB5IT+QJHz1Y+Pb4EetLOKZdU31k5+/ylALdN+hTjmK9mVKKDGwAY7jiOhF8PMGFSM4vNYpesy+nZRNU3/V4vQd7oqkrZzYNZyGAqmdJoXs2o1wPmnu7f/v2AHAYkaIq52fn0jyUiHxlvyA/EIXspQfxjamS50bB2CNMHWbHTDLmgoXgX1QJLHA5AiSUJUF9VMTddGS7BmSXMnuTe5fSwJr++3swCDgA5qn0DDtSUCrRikcjadm60LEd86ik//0j3teMlNukC7DfFfvgVAszeyW3D3EOp9q9p9Vzy/QNR5mo7bCRVeb5gLAYooBPDy6c0TCettjsRJmaSWjx2en9YotxpvOaQisUiDfn76SxvHqBNtsV15dWm+jxRxrXRtqgLGSep/BWB+Hf+7L5D6KcEOCdeX9T/ozmPme2JvD89w/6GvW+QeAQCR7osc9T/LSS+YP/wBXxXgNMcKqMeseeBYZHhZ/j3CnY1Zv/Fkhvyz/dN2uB/HHb+A8m9ti2fL1c/NCWYBwWVI3EY4khTrMu+FUsWMOYrd1ipi5rwgZNbbgQi1cq01ULA0SIJR/OtZbpOikFj7E+fI6g/5ReQXkAb59OPoO6s53HFNJFSLDpo8SAX5TRzJhKbv2aKoO2FDDXKBlsIaKaTLutggs66FeNIldHakPr7ZskyIm7cqCyvViv13HmOqtv06y+MjyRMehIl66gnu98X1OaEw772K269HbiJ6oR2osInIngr39+E/079RRCVaAkH77IRZCyoof6m53r4pK9Ekr0gRIGhuxjyOnQLyb8FJ9XrdhLxcAoM/dq4RcBqh7CeFsFAB+5xkxQt7oPxuyjBDCWIdcu2emh59Gocjy2XNNCjftIHaFbDBEgzzBUdvruyzXgpt+8YGmW/7sR3JR/MPDmwjrhDZmIyRgTepBpRpRQ2UkhrrQycEBRF1Mrh+0giIRITiJXvatcFND5kFdzsC92AEDLC5hHBygqYz9q7MbQ8+lscZ0XKJtSAfnT9ZzTEJpeIKExYTfD5//WeoMR1R7rfq0ud3KYZgmdtPCkQMfe1Kh87D2nKBucWJdH20Y40zibTirShV4lmvYAgK8kxmDDdIhydRUBotuxkvLCY5m4loAHp9KuSGZkjopF+Gu2W1PTIsQl9DrVmZa05Hb42+w/2aE74OniiUYeK1mjSqNOVW/VWuwpHc80QWv6cbjJXbkYNG6btLYz7p7sCoKF0Jrvmm71PdSZm/4OrjZjxQtKmOC7JjGGGI6TJhl/Y7Dq7+f3ynyrykEouPFrO8XFPXAAAA=="
        />
        <Product
          id="SDFSDS"
          title="RUNMUS Stereo Gaming Headset for PS4, Xbox One, Nintendo Switch, PC, PS3, Mac, Laptop, Over Ear Headphones PS4 Headset Xbox One Headset with Surround Sound, LED Light & Noise Canceling Microphone"
          price={38.85}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="764458"
          title="Victorinox Swiss Army Maverick Stainless Steel Watch, 43mm, Black"
          price={199.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61YHoITPhwL._AC_UX679_.jpg"
        />
        <Product
          id="5345356"
          title="Minecraft - Nintendo Switch"
          price={42.89}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._SL1500_.jpg"
        />
        <Product
          id="5356"
          title="Dash Mini Maker: The Mini Waffle Maker Machine for Individual Waffles, Paninis, Hash browns, & other on the go Breakfast, Lunch, or Snacks - Red"
          price={9.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81zKwg8kQ0L._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="7458"
          title="Caixun C32 32 Inch 720p Smart LED TV - High Resolution Television Built-in HDMI, USB - Support Screen Cast Mirroring (2020 Model)"
          price={139.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71M10bvmq8L._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
