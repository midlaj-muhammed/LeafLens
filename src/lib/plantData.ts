export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  careLevel: 'easy' | 'medium' | 'hard';
  sunlight: string;
  water: string;
  description: string;
  careInstructions: string;
}

export const plants: Plant[] = [
  {
    id: "1",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    image: "https://images.unsplash.com/photo-1593482892540-73c9199d8949?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25ha2UlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    careLevel: "easy",
    sunlight: "Low to bright indirect",
    water: "Every 2-6 weeks",
    description: "The Snake Plant, or Mother-in-Law's Tongue, is one of the most tolerant houseplants you can find. It features upright, sword-like leaves with beautiful variegated patterns in shades of green. This elegant plant grows well in a terracotta pot and can reach heights from 6 inches to 8 feet tall.",
    careInstructions: "Snake plants can survive in very low light conditions, but they thrive in medium to bright indirect light. Let the soil dry out completely between waterings, and reduce watering during winter. Use well-draining soil and ensure the pot has drainage holes. They're drought-tolerant and perfect for beginners or forgetful plant owners."
  },
  {
    id: "2",
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    image: "/images/pothos-shelf.jpg",
    careLevel: "easy",
    sunlight: "Low to bright indirect",
    water: "Every 1-2 weeks",
    description: "Pothos is a popular trailing vine with glossy green heart-shaped leaves that elegantly cascade from shelves or bookcases, making it perfect for home decor.",
    careInstructions: "Pothos plants are very adaptable and can thrive in a variety of lighting conditions, from low light to bright indirect light. Water when the top inch of soil is dry. They're perfect for shelves or bookcases as shown in the image, where the vines can gracefully trail down. They can tolerate occasional neglect, making them perfect for beginners."
  },
  {
    id: "3",
    name: "Monstera",
    scientificName: "Monstera deliciosa",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    careLevel: "medium",
    sunlight: "Medium to bright indirect",
    water: "Every 1-2 weeks",
    description: "The Monstera is known for its unique, fenestrated leaves that develop holes and splits as they mature.",
    careInstructions: "Monsteras prefer bright, indirect light but can tolerate medium light. Water when the top 1-2 inches of soil feel dry. They enjoy higher humidity, so misting occasionally is beneficial. Support with a moss pole as they grow to encourage larger leaves."
  },
  {
    id: "4",
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    careLevel: "medium",
    sunlight: "Low to medium indirect",
    water: "Every week",
    description: "Peace Lilies are known for their white spathe flowers and glossy green leaves. They're excellent air purifiers.",
    careInstructions: "Peace Lilies do well in low to medium indirect light. Water when the top of the soil feels dry or when leaves begin to droop slightly. They prefer higher humidity, so misting or placing on a pebble tray with water is beneficial."
  },
  {
    id: "5",
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    image: "/images/fiddle-leaf-fig.jpg",
    careLevel: "hard",
    sunlight: "Bright indirect",
    water: "Every 1-2 weeks",
    description: "The Fiddle Leaf Fig is known for its large, violin-shaped leaves that grow upright on a sleek trunk. This elegant plant features glossy, dark green foliage and makes a stunning statement in any room.",
    careInstructions: "Fiddle Leaf Figs require bright, indirect light and consistent care. Water when the top 1-2 inches of soil are dry, but avoid overwatering. They look beautiful in white ceramic pots as shown in the image. They prefer stable environments and don't like to be moved. Rotate periodically to ensure even growth."
  },
  {
    id: "6",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    image: "/images/aloe-vera.jpg",
    careLevel: "easy",
    sunlight: "Bright direct to indirect",
    water: "Every 3-4 weeks",
    description: "Aloe vera is a succulent plant known for its medicinal properties. Its gel-filled leaves are used to treat burns and skin conditions. These compact plants are perfect for small spaces and make excellent gifts.",
    careInstructions: "Aloe needs bright, indirect sunlight. Water thoroughly but infrequently, allowing soil to dry completely between waterings. They look stylish in simple white pots as shown in the image. Plant in well-draining cactus or succulent soil. Reduce watering in winter months."
  },
  {
    id: "7",
    name: "Spider Plant",
    scientificName: "Chlorophytum comosum",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    careLevel: "easy",
    sunlight: "Medium to bright indirect",
    water: "Every 1-2 weeks",
    description: "The Spider Plant features long, thin arching foliage that is typically variegated with white stripes. It produces baby plantlets on long stems.",
    careInstructions: "Spider plants thrive in bright to medium indirect light. Water when the top inch of soil is dry. They're not particularly fussy about humidity but will appreciate occasional misting. Spider plants are perfect for hanging baskets as their plantlets can cascade down."
  },
  {
    id: "8",
    name: "Rubber Plant",
    scientificName: "Ficus elastica",
    image: "/images/rubber-plant.jpg",
    careLevel: "medium",
    sunlight: "Medium to bright indirect",
    water: "Every 1-2 weeks",
    description: "The Rubber Plant has large, glossy leaves that can be dark green, burgundy, or variegated depending on the variety. This particular variety features beautiful green leaves with striking white variegation, making it a stunning focal point in any room.",
    careInstructions: "Rubber plants prefer bright, indirect light but can adapt to medium light. Water when the top inch of soil is dry. Variegated varieties like the one shown in the image need slightly more light to maintain their distinctive coloration. Wipe leaves occasionally to keep them dust-free and shiny. They prefer average to high humidity."
  },
  {
    id: "9",
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    image: "/images/plants/zz-plant.jpg",
    careLevel: "easy",
    sunlight: "Low to bright indirect",
    water: "Every 2-3 weeks",
    description: "The ZZ Plant is known for its glossy, dark green leaves that grow in a graceful, arching pattern. It's one of the most low-maintenance houseplants available and looks elegant in a simple white pot.",
    careInstructions: "ZZ Plants can tolerate very low light conditions and irregular watering. Allow the soil to dry out completely between waterings. They store water in their thick rhizomes, making them extremely drought-tolerant. As shown in the image, they make excellent gifts and are perfect for beginners. Avoid overwatering as this can lead to root rot."
  },
  {
    id: "10",
    name: "Chinese Money Plant",
    scientificName: "Pilea peperomioides",
    image: "/images/plants/chinese-money-plant.jpg",
    careLevel: "easy",
    sunlight: "Medium to bright indirect",
    water: "Every 1-2 weeks",
    description: "The Chinese Money Plant features distinctive round, coin-shaped leaves on thin stems. It's known for its quirky appearance and ease of propagation. As shown in the image, its unique circular leaves make it a standout decorative plant.",
    careInstructions: "Pilea plants prefer bright, indirect light but should be protected from direct sunlight. Water when the top inch of soil is dry. Rotate the plant regularly to prevent it from leaning toward the light source. The plant in the image shows a healthy specimen with its characteristic pancake-shaped leaves. They produce numerous 'pups' that can be separated and potted to share with friends."
  },
  {
    id: "11",
    name: "Boston Fern",
    scientificName: "Nephrolepis exaltata",
    image: "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60",
    careLevel: "medium",
    sunlight: "Medium indirect",
    water: "Every 1-2 weeks",
    description: "The Boston Fern features delicate, arching fronds with small leaflets that create a lush, feathery appearance. It's a classic houseplant that adds a touch of elegance to any space.",
    careInstructions: "Boston Ferns thrive in humid environments with consistent moisture. Keep the soil evenly moist but not soggy. They prefer medium, indirect light and high humidity. Mist regularly or place on a pebble tray with water to increase humidity. Avoid drafts and dry air."
  },
  {
    id: "12",
    name: "Calathea",
    scientificName: "Calathea spp.",
    image: "/images/plants/calathea.jpg",
    careLevel: "hard",
    sunlight: "Medium indirect",
    water: "Every 1-2 weeks",
    description: "Calatheas are known for their stunning, patterned leaves with intricate designs and vibrant colors. They're often called 'prayer plants' because their leaves fold up at night. The variety shown in the image displays beautiful green foliage with distinctive patterns.",
    careInstructions: "Calatheas prefer medium, indirect light and high humidity. Keep the soil consistently moist but not waterlogged. Use filtered or distilled water as they're sensitive to chemicals in tap water. The specimen in the image shows healthy growth with its characteristic patterned leaves. Maintain high humidity through regular misting or a humidifier. Avoid drafts and temperature fluctuations."
  },
  {
    id: "13",
    name: "String of Pearls",
    scientificName: "Senecio rowleyanus",
    image: "https://images.unsplash.com/photo-1530926738413-c1c8e697d4b4?auto=format&fit=crop&w=500&q=60",
    careLevel: "medium",
    sunlight: "Bright indirect",
    water: "Every 2-3 weeks",
    description: "String of Pearls is a striking succulent with cascading stems of bead-like leaves that resemble a string of pearls. It's perfect for hanging baskets or high shelves as shown in the image, where it can create a beautiful trailing effect.",
    careInstructions: "String of Pearls needs bright, indirect light. Water thoroughly when the soil is completely dry, typically every 2-3 weeks. Use well-draining soil and ensure the pot has drainage holes. As displayed in the image, they look stunning on wooden shelving where their trailing stems can be showcased. Reduce watering in winter. They're sensitive to overwatering, which can cause the pearls to burst."
  },
  {
    id: "14",
    name: "Philodendron",
    scientificName: "Philodendron spp.",
    image: "https://images.unsplash.com/photo-1680879961212-386050e2a7b4?auto=format&fit=crop&w=500&q=60",
    careLevel: "easy",
    sunlight: "Low to medium indirect",
    water: "Every 1-2 weeks",
    description: "Philodendrons are versatile tropical plants with heart-shaped or split leaves depending on the variety. They're known for their air-purifying qualities and adaptability. The variety shown in the image features distinctive split leaves with a dramatic appearance.",
    careInstructions: "Philodendrons are adaptable to various light conditions but prefer medium, indirect light. Water when the top inch of soil is dry. They enjoy higher humidity but can adapt to normal household conditions. The specimen in the image demonstrates the beautiful architectural quality of mature philodendron leaves. Climbing varieties benefit from a moss pole or trellis for support."
  },
  {
    id: "15",
    name: "Jade Plant",
    scientificName: "Crassula ovata",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60",
    careLevel: "easy",
    sunlight: "Bright direct to indirect",
    water: "Every 2-3 weeks",
    description: "The Jade Plant is a popular succulent with thick, woody stems and oval-shaped, fleshy leaves. It's often called the 'money plant' and is considered a symbol of good luck.",
    careInstructions: "Jade Plants thrive in bright light, including some direct sunlight. Water thoroughly when the soil is completely dry. Use well-draining soil and a pot with drainage holes. They can tolerate drought and prefer to be slightly underwatered rather than overwatered. Reduce watering in winter."
  },
  {
    id: "16",
    name: "Bird's Nest Fern",
    scientificName: "Asplenium nidus",
    image: "https://images.unsplash.com/photo-1740643059108-5e93b2a56719?auto=format&fit=crop&w=500&q=60",
    careLevel: "medium",
    sunlight: "Low to medium indirect",
    water: "Every 1-2 weeks",
    description: "The Bird's Nest Fern features wide, rippled fronds that emerge from a central rosette, resembling a bird's nest. It's a tropical fern that adds a lush, jungle-like feel to indoor spaces, as shown in the image where it's displayed alongside other plants on a windowsill.",
    careInstructions: "Bird's Nest Ferns prefer medium, indirect light. Keep the soil consistently moist but not soggy. As displayed in the image, they make excellent companions to other houseplants in bright, indirect light. Unlike other ferns, avoid misting the center rosette as water can accumulate and cause rot. They thrive in humid environments, so consider placing in a bathroom or using a humidifier."
  },
  {
    id: "17",
    name: "Air Plant",
    scientificName: "Tillandsia spp.",
    image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60",
    careLevel: "easy",
    sunlight: "Bright indirect",
    water: "Mist 2-3 times weekly",
    description: "Air Plants are unique plants that don't require soil to grow. They come in various shapes and sizes, from small and spiky to large and flowing, and can be displayed in creative ways.",
    careInstructions: "Air Plants need bright, indirect light. Water by misting 2-3 times a week or soaking in water for 20-30 minutes every 1-2 weeks. Ensure they dry completely within 4 hours after watering to prevent rot. They absorb nutrients through their leaves rather than roots."
  },
  {
    id: "18",
    name: "Orchid",
    scientificName: "Phalaenopsis spp.",
    image: "https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&w=500&q=60",
    careLevel: "medium",
    sunlight: "Medium to bright indirect",
    water: "Every 1-2 weeks",
    description: "Phalaenopsis Orchids, also known as Moth Orchids, are elegant flowering plants with long-lasting blooms in various colors. The purple variety shown in the image displays the classic moth-like appearance that gives these orchids their common name.",
    careInstructions: "Orchids prefer bright, indirect light. Water thoroughly when the potting medium is dry, usually every 7-10 days. They require special orchid potting mix rather than regular soil. The beautiful purple blooms shown in the image can last for months with proper care. After flowering, cut the stem back to encourage reblooming. They enjoy higher humidity but can adapt to normal household conditions."
  },
  {
    id: "19",
    name: "Zebra Plant",
    scientificName: "Haworthia fasciata",
    image: "https://images.unsplash.com/photo-1670121549647-3b9b35624552?auto=format&fit=crop&w=500&q=60",
    careLevel: "easy",
    sunlight: "Bright indirect",
    water: "Every 2-3 weeks",
    description: "The Zebra Plant is a small succulent with distinctive white horizontal stripes on dark green leaves that form a rosette pattern. As shown in the close-up image, the striking zebra-like markings are what give this plant its name.",
    careInstructions: "Haworthia prefers bright, indirect light but can tolerate lower light conditions better than most succulents. Water thoroughly when the soil is completely dry. The dramatic striping pattern visible in the image is most pronounced when the plant receives adequate light. Use well-draining cactus or succulent soil. They're drought-tolerant and perfect for forgetful waterers."
  },
  {
    id: "20",
    name: "Anthurium",
    scientificName: "Anthurium andraeanum",
    image: "https://images.unsplash.com/photo-1688481156464-4285423c8b39?auto=format&fit=crop&w=500&q=60",
    careLevel: "medium",
    sunlight: "Medium to bright indirect",
    water: "Every 1-2 weeks",
    description: "Anthuriums are tropical plants known for their bright, heart-shaped flowers (actually modified leaves called spathes) and glossy foliage. The pink variety shown in the image, also called Pink Flamingo, adds an elegant pop of color to indoor spaces.",
    careInstructions: "Anthuriums prefer medium to bright, indirect light. Water when the top inch of soil is dry. As shown in the image, they look stunning in simple white containers that highlight their colorful spathes. They enjoy high humidity, so consider misting regularly or placing on a pebble tray with water. Fertilize monthly during the growing season to encourage blooming."
  },
  {
    id: "21",
    name: "Parlor Palm",
    scientificName: "Chamaedorea elegans",
    image: "https://images.unsplash.com/photo-1687269111857-3b398711c2f4?auto=format&fit=crop&w=500&q=60",
    careLevel: "easy",
    sunlight: "Low to medium indirect",
    water: "Every 1-2 weeks",
    description: "The Parlor Palm is a compact palm with delicate, feathery fronds. It's been a popular houseplant since Victorian times due to its elegant appearance and ability to thrive in indoor conditions. As shown in the image, it makes a beautiful minimalist statement in a simple white pot.",
    careInstructions: "Parlor Palms can adapt to low light conditions but prefer medium, indirect light. Water when the top inch of soil is dry. As displayed in the image, they look elegant on wooden surfaces where their delicate fronds can be appreciated. They don't like to be overwatered or to sit in water. They're slow-growing and can live for many years with proper care."
  },
  {
    id: "22",
    name: "String of Hearts",
    scientificName: "Ceropegia woodii",
    image: "https://images.unsplash.com/photo-1669655548269-27ee203f21fd?auto=format&fit=crop&w=500&q=60",
    careLevel: "medium",
    sunlight: "Bright indirect",
    water: "Every 2-3 weeks",
    description: "String of Hearts is a delicate trailing plant with small, heart-shaped leaves that have silver marbling on the top and purple undersides. As shown in the image, it creates a beautiful cascading effect when placed in a decorative pot.",
    careInstructions: "String of Hearts prefers bright, indirect light. Water thoroughly when the soil is completely dry. Use well-draining soil and a pot with drainage holes. As displayed in the image, they look stunning in terracotta or ceramic pots that complement their delicate appearance. They're semi-succulent and can store water in their tubers, making them somewhat drought-tolerant."
  },
  {
    id: "23",
    name: "Croton",
    scientificName: "Codiaeum variegatum",
    image: "https://images.unsplash.com/photo-1630419544962-97655e1e88c9?auto=format&fit=crop&w=500&q=60",
    careLevel: "medium",
    sunlight: "Bright indirect to direct",
    water: "Every 1-2 weeks",
    description: "Crotons are known for their colorful, leathery leaves in shades of yellow, orange, red, and green. Their vibrant foliage adds a tropical flair to indoor spaces. The variety shown in the image displays beautiful yellow and green variegation.",
    careInstructions: "Crotons need bright light, including some direct sunlight, to maintain their vibrant colors. Water when the top inch of soil is dry. As shown in the image, they look stunning in simple white pots that highlight their colorful foliage. They prefer higher humidity but can adapt to normal household conditions. Avoid drafts and sudden temperature changes as they can cause leaf drop."
  },
  {
    id: "24",
    name: "Prayer Plant",
    scientificName: "Maranta leuconeura",
    image: "https://images.unsplash.com/photo-1627412099284-313b44f1d6b4?auto=format&fit=crop&w=500&q=60",
    careLevel: "medium",
    sunlight: "Medium indirect",
    water: "Every 1-2 weeks",
    description: "The Prayer Plant gets its name from the way its leaves fold up at night, resembling hands in prayer. It features stunning patterned leaves with intricate designs in various shades of green, red, and cream. The variety shown in the image displays beautiful patterned foliage in a natural terracotta pot.",
    careInstructions: "Prayer Plants prefer medium, indirect light. Keep the soil consistently moist but not waterlogged. They enjoy high humidity, so consider misting regularly or using a humidifier. As shown in the image, they look beautiful in terracotta pots which help maintain proper soil moisture levels. Use filtered or distilled water as they're sensitive to chemicals in tap water."
  }
];
