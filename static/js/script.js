// 'cotton', 'mungbean', 'kidneybeans', 'apple', 'papaya', 'jute',
//        'pigeonpeas', 'maize', 'muskmelon', 'coconut', 'coffee', 'mango',
//        'blackgram', 'grapes', 'chickpea', 'orange', 'pomegranate',
//        'lentil', 'mothbeans', 'rice', 'banana', 'watermelon'

document.addEventListener("DOMContentLoaded", (event) => {
  if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is papaya"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/papaya.jpg";
    document.getElementById("info").innerHTML = `<p class='dynamic-info'>
      <span>Climate:</span> Thrive in subtropical and tropical climates. Zone 10 to 11. They do not tolerate freezing temperatures and are damaged or killed if temperatures go below 32 degrees. <br>
      <span>Pollination:</span> The female plants produce fruit and may be cross pollinated with others by insects and wind. There are plants that may be self-pollinating (bi-sexual). <br>
      <span>Growth Habit:</span> The papaya is a short lived, fast growing woody herb. They generally have a single trunk and grow 10 to 15 feet tall, but some plants have been known to grow taller. <br>
      <span>Sun Light:</span> Grow best in full sun. Papayas love the heat and sunlight. <br>
      <span>Fertilize:</span> Papayas are heavy feeders and require regular fertilizing. Adding compost is also recommended.<br>
      <span>Water:</span> Papayas have large soft leaves and evaporate a lot of water in warm weather, so they need above average watering. <br>
      <span>Soil:</span> Papayas do best in rich soil that is high in organic matter. Make sure your planting location and soil has good drainage to avoid root rot.<br>
      <span>Harvesting:</span> Generally, fruit is picked when there is 1/5 to 1/3 color change in the fruit. After picking, keep at room temperature to fully ripen. Ripe fruit will keep 4 to 7 days in the refrigerator.<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is cotton"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/cotton.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p class='dynamic-info'><span>Soil: </span>Rich soil enriched with plenty of compost.<br>

        <span>Position: </span>Full sun. <br>
        
        <span>Frost tolerant: </span>Cannot tolerate frost. <br>
        
        <span>Feeding: </span>
        Mix a balanced organic fertilizer into the soil before planting cotton. In midsummer when flowering begins, topdress with more fertilizer or drench with a liquid plant food.<br><br>
        
        <span>Spacing: </span>
        Single Plants: 1' 11" (60cm) each way (minimum) <br>
        Rows: 1' 5" (45cm) with 3' 3" (1.00m) row gap (minimum) <br><br>
        
        <span>Sow and Plant: </span>
        Sow directly when the soil is warm. In cooler climates start seed indoors and transplant out after the last frost, being careful not to disturb the roots. Water very well before planting.<br>
        
        <span>Notes: </span>
        Cotton thrives on heat, but does not respond well to overwatering. In cool climates, grow individual cotton plants in large, dark-colored containers to increase root warmth. <br>
        
        <span>Harvesting: </span>
        Harvest after bolls split open, during a period of dry weather. Cut cotton on long stems and dry in bunches, like herbs. <br>
        
        <span>Troubleshooting: </span>
        Night-flying beetles often chew holes in cotton leaves, but this problem is mostly cosmetic.<br><p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is mungbean"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/mungbean.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Days to Harvest: </span>	100 days<br>
    <span>Light: </span>	Full sun<br>
    <span>Water: </span>	2-3 inches per week<br>
    <span>Soil: </span>	Well-drained sandy loam<br>
    <span>Fertilizer: </span>	Optional, low nitrogen (5-10-10)<br>
    <span>Pests: </span>	Aphids, bean beetles, bean weevils, mealybugs<br>
    <span>Diseases: </span>	Anthracnose, bean blight, bean mosaic, bean rust<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is kidneybeans"
  ) {
    document.querySelector("div#pic>img").src =
      "./static/images/kidneybeans.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>>1.Buy your seeds.</span> Purchase kidney bean seeds to plant in the ground. Rather than transplanting the plants, you want to grow them from seedlings. Bush beans and pole beans sprout from the same kinds of seeds.<br>
    <span>>2. Choose a sunny spot in your garden.</span> Pick a spot in your garden that gets plenty of direct sunlight, unobstructed by other plants or shaded areas. Kidney beans will need at least six hours of full sun a day for proper growth.<br>
    <span>>3. Prepare your soil.</span> You want to have loose, well-draining soil with a pH between 6.0 and 7.0 because the beans don’t respond well to high levels of moisture. Kidney beans generate their own nitrogen, so you won’t need to use mulch.<br>
    <span>>4. Choose your support.</span> Two common methods of growing kidney beans are in a planter or in the ground. If you’re planting your seeds in the ground, you may want to use a trellis or pole to support your plant as it grows vertically. If you’re not planting in your garden, you can use a planter to cultivate a small bean bush.<br>
    <span>>5. Dig your holes.</span> If you’re planting pole beans, create a series of one-to-two-inch deep holes, spacing them about four to six inches apart. If you’re planting bush beans, plant your seeds at least six inches apart, also at a depth of one-to-two-inches. If you’re cultivating a small bush in a planter, dig a single one-to-two inch hole in the middle of your planter.<br>
    <span>>6. Direct sow your seeds.</span> Like green beans and black beans, kidney beans have shallow roots, so it’s best to sow them directly into your soil rather than starting them in containers and transplanting them later.<br>
    <span>>7. Water your bean seeds.</span> Water your bean seeds whenever the soil around your plant appears dry. Overwatering can lead your seeds to rot. If you’re planting bush beans, water the seed immediately after you plant it. The germination process should begin in about 10 to 14 days.<br>
    <span>>8. Protect your beans.</span> Protect your bean plants from weeds by pulling them out by hand. You can also surround the plant with a small circle of mulch to protect weeds from growing into it. Check for pests like aphids, slugs, and leafhoppers often, and use organic fungicides if faced with powdery mildew or bean rust. <br><br>
    
    
    
    <b>When to Harvest Kidney Beans</b> <br>
    Kidney beans are usually ready to harvest by the end of spring, around 100 to 140 days after planting. Mature bean pods will be straw-colored, feel dry on the outside, and hard on the inside. You can gently bite on a kidney bean pod to see if it is ripe (ripened beans will be too hard to bite through), but be careful not to ingest it, as raw kidney beans may be toxic. <br>
    
    To harvest your beans, pull the entire bean plant out of the soil and hang it upside down in a dark, dry, and warm spot for a few days (or in some cases weeks) to cure the beans. Once they’ve hardened completely, pluck the pods from your bean plant and harvest the seeds inside. Seal unused beans in an airtight container to store them for a longer period of time.<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is jute"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/jute.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Climate for Jute Cultivation</span>
    Jute requires a hot and humid climate, a temperature fluctuation between 24o C and 37o C. However, the optimum is around 34 o C. There should not be constant rain or waterlogged conditions which are harmful to jute cultivation. In the seedling stage, water-logging is not advised. Alternate sunshine and rainy days are most helpful to jute growth.<br>
    <span>Soil Required for Jute Cultivation</span>
    The best soil recommended for the cultivation of jute is new grey alluvial soil of good depth, receiving silt from the annual floods. Jute is largely grown in sandy loams and clay loams. Varying clays are unsuitable for jute cultivation. You can note that the optimum pH range is around 6.4 for the cultivation of jute.
    
    In other words, jute requires a clean, clod-free field with a fine tilth. The land is ploughed, cross ploughed, & planked many times. All weeds must be thoroughly removed.<br>
    
    <span>Best Months for Jute Cultivation and Processing of Jute:</span>
    Jute is generally sown in February on lowlands & in March-May on uplands. The jute crop takes around 8 to 10 months to mature. However, different varieties take different time to mature. The harvesting period generally starts in July and continues till October.<br>
     <span>Processing of Jute Cultivation:</span>
    The jute plants are cut to the ground and tied into bundles. After that, sheaves of jute stocks are immersed in floodwater or ponds or stagnant water for about 2 - 3 weeks for retting. The high temperature of the water is advised which quickens the process of retting. Once retting is done, the bark is peeled from the plant & fibre is removed.
    
    Then comes stripping, rinsing, washing and cleaning. After that, the fibre is dried in the sun and pressed into bales. Remember all this process has to be done by human hand. Thus, the availability of more labour at cheap rates is very important. But the interesting part is there is no labour shortage as jute is cultivated in areas of high population density.<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is pigeonpeas"
  ) {
    document.querySelector("div#pic>img").src =
      "./static/images/pigeonpeas.jpg";
    document.getElementById("info").innerHTML = `<p><span>Climate</span>

      Pigeonpea is predominantly a crop of tropical areas mainly cultivated in semi-arid regions of India. Pigeonpea can be grown between 14°N and 28°N latitude, with a temperature ranging from 26° to 30°C in the rainy season (June to October) and 17° to 22°C in the postrainy (November to March) season. The amount of daily global solar radiation varies from 400 to 430 cal cm day in the rainy season and 380-430 cal cm-2 day-1 in the postrainy season. Mean annual rainfall ranges from 600 to 1400 mm, of which 80%-90% is received in the rainy season. The length of growing season extends from 120 to 180 days. Isoclimes similar to India exist in western Africa and southern Sudan, a suitable environment for growing pigeonpea. Pigeonpea is very sensitive to low radiation at pod development, therefore flowering during the monsoon and cloudy weather, leads to poor pod formation.<br>
      
      <span>Soils</span>
      
      In India, pigeonpea is cultivated on Entisols, Alfisols, Enceptisols, and Vertisols. The Entisols found in the alluvial- soil belt of the Indo-Gangetic region are deep loams, slightly alkaline (pH 7.5-8.5), with about 150-200 mm available water storage capacity in 2 m of soil. The Vertisols are characterized by 40-60% clay in the surface soil horizons, pH around 8.0 with a water holding capacity between 150-300 mm, and the available water in the top 1.5-2.0 m of soil. Alfisols are neutral in reaction (pH 6.5-7.0) and relatively shallow with a low-clay content. They are often sandy loam and can retain about 100 mm available water in the root profile (Reddy and Virmani 1981). Pigeonpea, being sensitive to water logging, requires a well-drained soil. It does not grow well in saline soil, but can withstand drought reasonably well. Responses to lime indicated by increase in shoot growth and nodulation, have been reported in soils with pH below 5.0.<br>
      
      <span>Land Preparation</span>
      
      Land preparation for pigeonpea requires at least one ploughing during the dry season followed by 2 or 3 harrowings. The "summer" plowing helps in minimizing the weed flora and to conserve moisture . Well-drained soils are necessary for good root and nodule development. Contour beds or a ridge-and-furrow system are useful in preventing water logging by draining excess surface water,and in preventing soil erosion. Organic manure may be applied 2-4 weeks before sowing. In acidic soils 2-4 t ha-1 of lime is incorporated 3-4 weeks before sowing to neutralize the acidity. In light soils, a basal application of aldrin 5% dust @ 30 kg ha-1 prevents termite infestation.<br>
      
      <span>Irrigation</span>
      
      Pigeonpea is largely grown as a rainfed crop, however, it is well established that flower initiation and pod setting stages are the most crucial to drought stress . Therefore, irrigation at these stages usually helps the crop . The drought-stress symptoms on pigeon pea are indicated by the leaves pointing towards the sun at noon .<br>
      
      Excessive moisture is detrimental to pigeon pea. It promotes vegetative growth and enhances the incidence of Phytophthora and Alternaria blight. Therefore , irrigation should be given only when the crop experiences drought stress after flowering and at the pod filling stage. Responses to irrigation are more consistent in postrainy season sown pigeon pea. This crop relies on moisture stored inthe soil profile. <br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is maize"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/maize.jpg";
    document.getElementById("info").innerHTML = `<p><span>
    Climate: </span>
    Maize is a tropical plant which prefers warm humid weather. It is a short-day plant. It is very sensitive to excess or deficit soil moisture. It cannot with stand frost at any stage of growth. The optimum pH range of soil for maize is 6.5-7.5. 600 mm rainfall with even distribution is sufficient for good cultivation. Optimum temperatures for germination are 21℃ and for growth is 32℃ respectively. <br>
    
    <span>Soils: </span>
    Maize can be grown on a variety of soils, but it grows best on well drained soils. 
    
    1. Best soils- Deep dark silt loams<br>
    
    2. In semi-arid climates- Deep soils (Heavy Texture)<br>
    
    3. In sub humid climates- Sand Loam soils<br>
    
    <span>Seasons: </span>
    Kharif – sowing in between last week of May to 2nd week of June and harvested in late September or October. <br>
    <span>Land preparation:</span>
    2-3 shallow tillage operations during summer season are essential. Deep ploughing is also helpful to control weeds & for efficient moisture conservation. <br>
    
    <span>Water Management: </span>
    The optimum available soil moisture for maize crop is 75% or 80%. 
    
    The frequency of irrigation will be once in 6-10 days depending upon rainfall. The total water requirement varies from 530mm to 800mm depending upon season & rainfall received during the crop growth crop period. 
    
    Light & frequent irrigations just to moisten the effective root zone of the maize crop viz., 15cm to 22.5cm depth of soil are more conductive to higher yield. 
    
    Up to 40 DAS, the crop is more sensitive to excess moisture & from pre-flowering to maturity, it is more sensitive to drought.<br> </p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is muskmelon"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/muskmelon.jpg";
    document.getElementById("info").innerHTML = `<p><span>SOIL</span>
    It grows well in deep fertile and well-drained soil. It gives best result when grown on well drained loam soil. Soil having poor drainage capacity is not suited for Muskmelon cultivation. Follow crop rotation as continuous growing of same crop on same field leads loss of nutrients, poor yield and more disease attack. pH of soil should be in between 6-7. Alkaline soil with high salt concentration is not suitable for cultivation.<br>
    <span>LAND PREPARATION</span>
    Plough land and bring to fine tilth. In North India, sowing is done in middle of February month. In North east and west India sowing is done during November to January.<br>
    <span>IRRIGATION</span>
    Apply irrigation, every week in summer season. At time of maturity give irrigation only when needed. Avoid over flooding in muskmelon field. During application of irrigation, do not wet the vines or vegetative parts, especially during flowering and fruit-set. Avoid frequent irrigation in heavy soil as it will promote excessive vegetative growth. For better sweetness and flavor, stop irrigation or reduce watering 3-6days before harvesting.  <br>
    <span>SOWING</span>
    Time of sowing<br>
    Middle of February is optimum time for muskmelon cultivation.<br>
    
    Spacing<br>
    Prepare 3-4m wide beds depending upon variety use. Sow two seeds per hill on bed and keep distance of 60cm between hill.<br>
     
    Sowing Depth<br>
    Plant seed about 1.5cm deep.<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is coconut"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/coconut.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p> <span>CLIMATE AND SOIL</span>
    The coconut palm is found to grow under varying climatic and soil conditions. It is essentially a tropical plant, growing most!y between 20° N and 20° S latitudes. The ideal temperature for coconut growth and yield is 27 ± 5° C and humidity > 60 per cent. The coconut palm grows well upto an elevation of 600 m above MSL. However, near the equator, productive coconut plantations can be established up to an elevation of about 1000 m above MSL. The palms tolerate wide range in intensity and distribution of rainfall. However, a well distributed rainfall of about 200 cm per year is the best for proper growth and higher yield. In areas of inadequate rainfall with uneven distribution, irrigation is required.<br>

    <span>Planting</span>
    Before planting the pits are filled up with top soil and powdered cow dung / compost up to a depth of 50 to 60 cm. Then take a small pit inside this, so as to accommodate the nut attached to the seedling. Plant the seedling inside this pit and fill up with soil. Press the soil well so as to avoid water stagnation. If there is chance for white-ant attack apply Sevidol 8G (5gm.) inside the small pit before planting.<br>

In laterite areas apply 2 kg common salt per pit for improving the physical condition of the soil. Burying 25 to 30 coconut husks per pit in layers will be useful for moisture conservation.<br>

<span>Care of young Palms</span>
The transplanted seedlings should be shaded and irrigated adequately during the summer months. Also provide staking so that winds may not uproot the young seedlings. For the first two years after planting, irrigate the seedling twice a week during the dry summer months. Shading is a must to the transplanted seedlings.<br>

<span>Manuring</span>
Regular manuring from the first year of planting is essential to achieve higher productivity. For coconut 20 - 50 kg organic manure should be applied per palm per year with the onset of south west monsoon, when soil moisture content is high. Different forms of organic manures like compost, farm yard manure, bone meal, fish meal, blood meal, neem cake, groundnut cake etc. could be made use for this purpose. In addition to this the following Fertilizer Schedule is recommended.<br>
    </p> `;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is coffee"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/coffee.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Plant Type: </span>	Perennial<br>
    <span>Mature Size: </span>	6–15 ft. tall, 6-15 ft. wide<br>
    <span>Sun Exposure: </span>	Partial<br>
    <span>Soil Type: </span>	Moist<br>
    <span>Soil pH: </span>	Acidic<br>
    <span>Bloom Time: </span>	Spring<br>
    <span>Flower Color: </span>	White<br>
    <span>Hardiness Zones: </span>	9–11 (USDA)<br>
    <span>Native Area: </span>	Africa<br>
    <span>Toxicity: </span>	Toxic to humans, toxic to pets<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is mango"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/mango.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Season for Mango Tree Plantation</span>
    Usually, the timing for planting mango seeds vary although it depends on the amount of rainfall the particular area receives. They are planted at the end of the rainy season in places where there is ample rainfall. Planting is done during the months of February and March in irrigated areas. Lastly, in rain-fed area, the planting is done in July- August period.<br>
    
    <span>pH Required for Mango Cultivation</span>
    Mangoes cannot tolerate alkalinity while it can grow in light acidic soil. Hence, a pH between 4.5 and 7.0 is preferred for mango cultivation. The soil is sometimes mixed with peat moss a year before mango tree plantation to improve the acidity of the soils.<br>
    
    <span>Water for Mango Cultivation</span>
    The irrigation requirement of mango plant depends on the climate and soil of the area of cultivation. Soil with good water retention capacity needs lesser irrigation while clayey soils need no irrigation at all. Mango saplings need frequent watering till they establish themselves properly. This also helps promote vigorous plant growth. Once established which is after a period of 6 months, they are irrigated once in every 10-15 days. It must be increased in case of soil with good drainage capacity. Irrigation should also be followed during winter to avoid the saplings from getting affected by frost. It is generally stopped 2-3 months before flowering because it might promote vegetative growth during the flowering period indirectly affecting the yield of the fruits.<br>
    <span>Soil for Mango Tree Cultivation</span>
    Mangoes grow well in all types of soils. However, the primary soil requirement is that they must be well-drained and deep. Red, loamy soil is the most ideal for mango cultivation. However, in India, they can grow in alluvial, clayey or laterite soil. The soil must have rich organic content and must have a good water retaining capacity. Soils that do not have good draining facility are not ideal for mango plantation. They grow on plains rather than hills. Cultivation in hilly areas can lead to very low yields as the drainage and climatic conditions are not best suited for mango cultivation. Soils with good amount of iron peroxide and 5-10% lime are ideal for producing the best quality mango fruits. Fruits produced in such soil conditions have a bright red tinge.<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is blackgram"
  ) {
    document.querySelector("div#pic>img").src =
      "./static/images/blackgram.jpeg";
    document.getElementById("info").innerHTML = `<p><span>Seed treatment</span>
      Rhizobium 200 gm + PSB 250 gm /10kg of seed.  Seed treatment with (Carbendazim 1 gm+ Thiram 1.5 gm) per kg of seed. Greengram blackgram  under intensive cropping should be treated with Carbofuran @ 0.2% one week before Rhizobium treatment against Root knot  and Reniform nematode.<br>
      
      <span>Seed rate and Sowing</span>
      Optimum sowing time mid June subject to availability of moisture/rainfall. Seed rate is 15-20 kg/ha for kharif and 25-30 kg/ha for spring or rabi. Row-to-row distance is 30-35 cm for kharif and 25 cm for rabi or spring.<br>
      
      <span>Fertilizer dose</span>
      20:40:20 NPK kg/ha along with 20 kg S/ha greatly increases yield of pulses and also benefit the succeeding crop. Among the micro nutrients Zn is the most deficient nutrient. So the application of Zn @ 25 kg/ha as basal gives very promising results.  Boron and Molybdenum gives better results in acid soil.<br>
      
      Foliar spray of 2% DAP and 2% KCl at Pre flowering stage enhances the yield.<br>
      <span>Climate</span>
      During kharif, it is cultivated throughout the country. It is best suited to rice fallows during rabi in southern and south-eastern parts of India. Blackgram needs relatively heavier soils than greengram.<br>
      
      <span>Soil</span>
      Black gram can be grown on variety of soils ranging from sandy soils to heavy cotton soils. The most ideal soil is a well drained loam with pH of 6.5 to 7.8. Black gram cannot be grown on alkaline and saline soils. Land is prepared like any other kharif season pulse crop. However during summer it requires a thorough preparation to give a pulverized free from stubbles and weeds completely.<br>
      
      
      
      </p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is grapes"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/grapes.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Soil: </span> Loamy, sandy, clay, PH between 6.0 to 7.0, fertile, well-drained<br>
    <span>Sun Exposure: </span> Full sun<br>
    <span>Planting: </span> In early or mid-spring after all danger of frost has passed<br>
    <span>Spacing: </span> 6 to 10 feet between plants and rows<br>
    <span>Depth: </span> Plant the vines at the same level as in the nursery<br>
    <span>Best Companions: </span> Chive, clover, mustard, peas, blackberry, oregano, geranium<br>
    <span>Worst Companions: </span> Potato, radish, garlic<br>
   <span> Watering: </span> Water regularly, at least once in 10 days during hot weather<br>
    <span>Fertilizing: </span> Place 1/4 to 1/2 cup of 16-16-8 fertilizer 2 to 3 inches deep and 10 to 12 inches from the plant when planting and again in March of the second year<br>
    <span>Common Problems: </span> Anthracnose, Armillaria root rot, botrytis bunch rot, eutypa dieback, esca, leaf blight, leaf spot, powdery mildew, black rot, crown gall, pierce’s disease, young vine decline, black vine weevil, grape cane girdler, grape mealybug, Japanese beetle<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is chickpea"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/chickpea.jpeg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Plant Type: </span>	Annual, vegetable<br>
    <span>Mature Size: </span>	8-24 in. tall and wide<br>
    <span>Sun Exposure: </span>	Full<br>
    <span>Soil Type: </span>	Loamy, sandy, well-drained<br>
    <span>Soil pH: </span> 	Acidic <br>
    <span>Bloom Time : </span>	Spring<br>
    <span>Hardiness Zones: </span>	3-9 (USDA)<br>
    <span>Native Area: </span>	Asia, Africa, Middle East<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is orange"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/orange.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Plant Type: </span>	Tree, Fruit<br>
    <span>Size: </span>	30 ft. tall (full size), 12 ft. tall (dwarf), 30 ft. wide (full size), 12 ft. wide (dwarf)<br>
    <span>Sun Exposure: </span>	Full<br>
    <span>Soil Type: </span>	Loamy, Well-drained<br>
    <span>Soil pH: </span>	Acidic, Neutral<br>
    <span>Bloom Time: </span>	Summer<br>
    <span>Flower Color: </span>	White<br>
    <span>Hardiness Zones: </span>	9-11 (USDA)<br>
    <span>Native Area: </span>	Asia<br>
   <span> Toxicity: </span>	Toxic to pets<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is pomegranate"
  ) {
    document.querySelector("div#pic>img").src =
      "./static/images/pomegranate.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Plant Type:</span>	Shrub, small tree<br>
      <span>Size:</span>	From 3 ft. dwarf forms to 30 ft tall trees<br>
      <span>Sun Exposure:</span>	Full sun<br>
      <span>Soil Type:</span>	Grows in most types, but must be well-drained<br>
      <span>Soil pH:</span>	Acidic, neutral, alkaline (5.5 to 7)<br>
      <span>Hardiness Zones:</span>	7-10 (USDA)<br>
      <span>Native Area:</span>	Iran to northern India<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is lentil"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/lentil.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Plant Type: </span>	Fruit, vegetable<br>
    <span> Mature Size: </span>	12 to 20 in. tall<br>
    <span> Sun Exposure: </span>	Full sun<br>
    <span> Soil Type	: </span>Well-drained, sandy, loamy<br>
    <span> Soil pH: </span>	Acidic, neutral, alkaline<br>
    <span> Bloom Time: </span>	Spring<br>
    <span> Flower Color: </span>	White, blue, purple<br>
    <span> Hardiness Zones: </span>	5-11 (USDA)<br>
    <span> Native Area: </span>	Mediterranean<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is mothbeans"
  ) {
    document.querySelector("div#pic>img").src =
      "./static/images/mothbeans.jpeg";
    document.getElementById("info").innerHTML = `<p><span>Season: </span>
      It is often planted at the end of the rainy season.<br>
      
      <span>Climate: </span>
      The ideal temperature for growing Moth bean is between 24°c-32°c.
      
      It can also permit up to 45°c during the day.
      
      For growing Moth Bean , 500-750mm of rainfall is required and it can also do well with 300mm of annual rainfall.<br>
      <span>Soil Requirements: </span>
      Other than in which it is normally grown it doesn’t need any soil conditions.
      
      In the Northern-western mid regions of India it can be strongly cultivated on well-drained sandy plains and poor dunes with poor organic matters and poor fertility rate.<br>
      
      On plain lands and dunes it is cultivated as sole, mix and intercrop.<br>
      
      To reduce the losses of soil moisture, the crops can immediately be sown after rain on light soil dunes.<br>
      
      It has a wide pH range of 3.5-10.<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is rice"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/rice.jpg";
    document.getElementById("info").innerHTML = `<p><span>Wet Preparation<br>

    Wet preparation is an option for upland and lowland fields. This method requires a large amount of water to prepare the field for the near future cultivation. With this method, the soil is adequately tilled in waterlogged conditions. We can take into consideration the following steps to prepare the rice paddy. <br>
    
    <b>Step 1:</b>  Construction or repair of dikes. In general, dikes help the field hold water from rainfall. We can build 19×12 inches (50×30 cm) dikes around the field. Many rice farmers report that each channel has a 1,1-1,9 inches (3-5 cm) height. The purpose is to ensure water availability during rainy periods.<br>
    
    <b>Step 2:</b> Field irrigation. After the construction of water channels, many rice farmers irrigate the field at least for a week. This helps the soil become smooth, soft and ready for plowing.<br>
    
    <b>Step 3:</b> Tillage procedures. We can perform tillage after the soil is adequately irrigated. When the soil is wet enough, the chances are that it is ready for plowing.<br>
    
    <b>Step 4:</b> Flooding of the Field. After plowing, rice farmers often flood the field for about 2 weeks.<br>
    
    <b>Step 5:</b> Secondary tillage procedures. This step is often performed at least 10 days after the first tillage. It involves field puddling and harrowing. Puddling can be done with rotavators and power tillers. Soil becomes muddy. Soil nutrient preservation and availability can normally be accomplished with this method. Then, we may harrow the rice paddy 2-3 times in a time window from 5-7 days.<br>
    
    <b>Step 6:</b> Field leveling. The final step in wet preparation takes place two days before planting. Tractors or animals can help this procedure. A wooden plank attached to them will cross all over the field and level it. The even soil surface is essential for the proper growth of the crops.<br>
    
    <span>Dry Preparation </span><br>
    
    Dry preparation is an option for both lowland and upland fields. This kind of preparation needs less water. We can take into account the following steps to prepare the rice paddy.<br>
    
    <b>Step 1:</b> Construction of dikes. As mentioned before, dikes help the field hold water from rainfall. We may build 19×12 inches (50×30 cm) dikes around the field. Each channel normally has a 1,1-1,9 inches (3-5 cm) height. The purpose here is to ensure water availability during rainy periods.<br>
    
    <b>Step 2:</b> Tillage procedures. We may perform tillage after the soil is adequately irrigated.<br>
    
    <b>Step 3:</b> Secondary tillage procedures. Farmers often harrow and till the field with a rototiller.<br>
    
    <b>Step 4:</b> Field leveling. In dry preparation, we have a short amount of water in the field. In this case, we normally do not have to use a wooden plank to level it. Laser Land leveling is commonly used in this case. The even soil surface is essential for good growth of the crops.<br>
    
    <b>Step 5:</b> Weed control. A common way to prevent the growth of weeds is to let them grow for at least two weeks. After their appearance, farmers often apply herbicides (always ask a licensed agronomist before using any crop protection product). We must be very careful about any potential herbicide effects.<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is banana"
  ) {
    document.querySelector("div#pic>img").src = "./static/images/banana.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Plant Type: </span>	Herbaceous, perennial <br>
    <span> Mature Size: </span>	2–30 ft. tall, 1–15 ft. wide (varies widely by species) <br>
    <span> Sun Exposure: </span>	Full <br>
   <span>  Soil Type: </span>	Loamy, well-drained <br>
   <span>  Soil pH: </span>	Acidic <br>
   <span>  Bloom Time: </span>	Spring <br>
    <span> Flower Color: </span>	White, purple, orange <br>
    <span> Hardiness Zones: </span>	9–11 (USDA) <br>
    <span> Native Area: </span>	Asia, Africa, Australia<br></p>`;
  } else if (
    document.querySelector("div#b>b").textContent ==
    "The recommended crop for the soil type is watermelon"
  ) {
    document.querySelector("div#pic>img").src =
      "./static/images/watermelon.jpeg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Plant Type: </span>	Annual fruiting vine<br>
      <span> Sun Exposure: </span>	Full sun<br>
      <span> Size: </span>	9 to 18 inches tall; 10- to 15-foot vine spread<br>
      <span> Soil Needs: </span>	Loamy, sandy, well-drained<br>
      <span> Soil pH: </span>	Slightly acidic to neutral (6.0 to 6.8)<br>
      <span> Native Area: </span>	Western Africa<br>
      <span> Hardiness Zones: </span>	Grown as an annual in zones 2 to 11<br></p>`;
  } else {
    document.querySelector("div#pic>img").src = "./static/images/apple.jpg";
    document.getElementById(
      "info"
    ).innerHTML = `<p><span>Best Climate and Site for Growing Apples</span><br>
    Apples grow in Zones 3 to 9. Some can tolerate winter temperatures as low as -40°F. Choose an apple tree suited for winter temperatures where you live. See Chilling Hours below.<br>
    Apples generally do not grow well close to the ocean where temperatures remain moderate most of the year.<br>
    Apples grow best in full sun. An apple tree planted in partial sunlight will not bear as many fruits like an apple planted in full sun.<br>
    Apples grow best in well-drained loamy soil, although they will grow in more sandy soil or in soil with some clay.<br>
    Apples grow best in a neutral soil pH of 6.0 to 7.0.<br>
    Plant apples sheltered from a prevailing wind or breeze. Avoid planting apples in a low spot where cold air or frost can settle.<br>
    Late spring frosts can kill apple flowers. Apples bloom in late spring after peaches, cherries, and almonds. Early fall frosts can damage the fruit. Choose a variety suited to your growing region.<br>
    Avoid planting in the same spot where apple trees have previously grown. Pests and diseases that attack apple trees may still live in the soil.<br></p>`;
  }
});
