const moreTrucks = [
    {
        brand: "Scania",
        model: "R-Series",
        imgs: [
            "/img/scaniaRseries.png",
            "/img/scaniaRseries2.png",
            "/img/scaniaRseries3.png",
            "/img/scaniaRseries4.png",
            "/img/scaniaRseries5.png",
            "/img/scaniaRseries6.png",
            "/img/scaniaRseries7.png",
        ],
        models: [
            {
                name: "R410",
                description: "Efficient and reliable truck for medium to long-haul transport.",
                highCab: false,
                engines: [
                    {
                        name: "DC13 410 Euro 6 SCR",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Smooth power delivery and responsive acceleration for urban and regional routes.",
                        maintenanceCosts: "Low, thanks to advanced SCR technology and durable components.",
                        horsePower: 410,
                        pullingPower: "Suitable for moderate loads, up to 40 tons.",
                        reliability: "High, designed for consistent performance over long distances.",
                        price: "$120,000 - $140,000",
                        makeAndModel: "Scania R410, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "410 HP",
                            torque: "2150 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-efficient design",
                    "Cruise control",
                    "Ergonomic driver cabin"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R440",
                description: "Balanced truck for various operations with optimal fuel economy.",
                highCab: false,
                engines: [
                    {
                        name: "DC13 440 Euro 5 SCR",
                        fuelEfficiency: "7.0 km/l",
                        driverBehavior: "Ideal for balanced regional and highway operations.",
                        maintenanceCosts: "Moderate, with routine service intervals.",
                        horsePower: 440,
                        pullingPower: "Can pull up to 45 tons.",
                        reliability: "High, well-suited for multi-purpose operations.",
                        price: "$125,000 - $145,000",
                        makeAndModel: "Scania R440, 2008",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "440 HP",
                            torque: "2200 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 5)"
                        }
                    }
                ],
                features: [
                    "High-torque engine",
                    "Enhanced fuel efficiency",
                    "Driver comfort features"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R450",
                description: "Premium truck with advanced safety and comfort features.",
                highCab: true,
                engines: [
                    {
                        name: "DC13 450 Euro 6 SCR",
                        fuelEfficiency: "7.2 km/l",
                        driverBehavior: "Balanced performance for long-haul and regional transport.",
                        maintenanceCosts: "Moderate, with enhanced durability and service intervals.",
                        horsePower: 450,
                        pullingPower: "Capable of towing up to 44 tons efficiently.",
                        reliability: "Very high, suitable for demanding operations.",
                        price: "$140,000 - $160,000",
                        makeAndModel: "Scania R450, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "450 HP",
                            torque: "2350 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Active driver assist",
                    "Efficient driveline",
                    "Safety enhancements"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R460",
                description: "Reliable truck for versatile applications with strong performance.",
                highCab: false,
                engines: [
                    {
                        name: "DC13 460 Euro 6 SCR",
                        fuelEfficiency: "7.0 km/l",
                        driverBehavior: "Well-suited for both highway and regional applications with a strong torque curve.",
                        maintenanceCosts: "Moderate, with a solid design for long-haul use.",
                        horsePower: 460,
                        pullingPower: "Handles up to 45 tons effectively.",
                        reliability: "High, durable for multi-environment use.",
                        price: "$145,000 - $165,000",
                        makeAndModel: "Scania R460, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2400 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-efficient engine",
                    "Durable construction",
                    "Modern driver assistance"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R480",
                description: "Truck offering excellent balance between power and efficiency.",
                highCab: true,
                engines: [
                    {
                        name: "DC13 480 Euro 5 SCR",
                        fuelEfficiency: "6.8 km/l",
                        driverBehavior: "Efficient and strong, ideal for medium to long-haul routes.",
                        maintenanceCosts: "Moderate, durable SCR system.",
                        horsePower: 480,
                        pullingPower: "Can handle up to 50 tons of load.",
                        reliability: "Very high, built for continuous heavy-duty operations.",
                        price: "$150,000 - $170,000",
                        makeAndModel: "Scania R480, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "480 HP",
                            torque: "2500 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 5)"
                        }
                    }
                ],
                features: [
                    "High-performance engine",
                    "Improved aerodynamics",
                    "Optimized cab design"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R500",
                description: "High-performance truck designed for demanding operations.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 500 Euro 5 EGR",
                        fuelEfficiency: "6.5 km/l",
                        driverBehavior: "Best-in-class performance for heavy-duty operations.",
                        maintenanceCosts: "Higher, V8 design but compensated by durability.",
                        horsePower: 500,
                        pullingPower: "Handles heavy loads up to 55 tons.",
                        reliability: "Exceptional, even for long-distance hauls.",
                        price: "$180,000 - $200,000",
                        makeAndModel: "Scania R500, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "500 HP",
                            torque: "2700 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 5)"
                        }
                    }
                ],
                features: [
                    "Powerful V8 engine",
                    "Adaptive cruise control",
                    "Enhanced driver environment"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R520",
                description: "Versatile truck with exceptional power for heavy loads.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 520 Euro 6 SCR",
                        fuelEfficiency: "6.2 km/l",
                        driverBehavior: "Optimized for high-performance hauling.",
                        maintenanceCosts: "Moderate, reliable V8 design.",
                        horsePower: 520,
                        pullingPower: "Capable of towing up to 60 tons.",
                        reliability: "Very high, built for demanding tasks.",
                        price: "$200,000 - $220,000",
                        makeAndModel: "Scania R520, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "520 HP",
                            torque: "3000 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High-torque V8 engine",
                    "Efficient driveline",
                    "Advanced driver assistance"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R530",
                description: "Heavy-duty truck with outstanding power for extreme loads and long hauls.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 530 Euro 6 SCR",
                        fuelEfficiency: "6.0 km/l",
                        driverBehavior: "Excellent acceleration and steady performance for heavy-duty operations.",
                        maintenanceCosts: "Moderate, thanks to robust V8 engine design.",
                        horsePower: 530,
                        pullingPower: "Ideal for towing up to 60 tons.",
                        reliability: "Exceptional, designed for challenging environments and long distances.",
                        price: "$210,000 - $230,000",
                        makeAndModel: "Scania R530, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "530 HP",
                            torque: "3200 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "V8 performance",
                    "Long-haul suitability",
                    "High-efficiency fuel system"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R540",
                description: "Powerful truck offering superior performance for long-haul, high-weight tasks.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 540 Euro 6 SCR",
                        fuelEfficiency: "5.8 km/l",
                        driverBehavior: "Strong torque and smooth handling ideal for long, heavy-duty routes.",
                        maintenanceCosts: "Moderate, with optimal service intervals for long-haul tasks.",
                        horsePower: 540,
                        pullingPower: "Handles up to 65 tons of load effortlessly.",
                        reliability: "Outstanding, capable of high-demand, long-distance hauling.",
                        price: "$220,000 - $240,000",
                        makeAndModel: "Scania R540, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "540 HP",
                            torque: "3400 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High-performance V8 engine",
                    "Heavy-load capability",
                    "Advanced driver support systems"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R580",
                description: "Heavy-duty powerhouse designed for ultra-long-haul and demanding tasks.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 580 Euro 6 SCR",
                        fuelEfficiency: "5.6 km/l",
                        driverBehavior: "Optimized for maximum pulling power and long-distance comfort.",
                        maintenanceCosts: "Moderate to high, for continuous heavy-duty usage.",
                        horsePower: 580,
                        pullingPower: "Perfect for towing over 70 tons of load.",
                        reliability: "Very high, designed to withstand the toughest operations.",
                        price: "$230,000 - $250,000",
                        makeAndModel: "Scania R580, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "580 HP",
                            torque: "3600 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Extra-high towing capacity",
                    "Optimal fuel efficiency for long-distance",
                    "Comfortable high-cab design"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R590",
                description: "Top-performing truck built for extreme hauling capacities.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 590 Euro 6 SCR",
                        fuelEfficiency: "5.4 km/l",
                        driverBehavior: "Superior stability, great torque and engine response for large loads.",
                        maintenanceCosts: "High, designed for the highest-performance demands.",
                        horsePower: 590,
                        pullingPower: "Handles 75 tons with ease.",
                        reliability: "Extremely high, perfect for multi-continental and demanding operations.",
                        price: "$240,000 - $260,000",
                        makeAndModel: "Scania R590, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "590 HP",
                            torque: "3800 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High torque for heavy-duty operations",
                    "Large load capacity",
                    "Ergonomic driver environment"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R620",
                description: "Elite truck for unparalleled performance and efficiency under heavy demands.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 620 Euro 6 SCR",
                        fuelEfficiency: "5.3 km/l",
                        driverBehavior: "Optimized for maximum stability and efficiency under heavy load.",
                        maintenanceCosts: "Moderate to high, due to advanced engine design.",
                        horsePower: 620,
                        pullingPower: "Can manage up to 80 tons of load.",
                        reliability: "Excellent, engineered for the most demanding transportation jobs.",
                        price: "$250,000 - $270,000",
                        makeAndModel: "Scania R620, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "620 HP",
                            torque: "4000 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Maximum towing and hauling capability",
                    "Top-tier performance and fuel efficiency",
                    "High-comfort driver cabin"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R650",
                description: "Superior power with remarkable fuel efficiency for demanding tasks.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 650 Euro 6 SCR",
                        fuelEfficiency: "5.2 km/l",
                        driverBehavior: "Exceptionally powerful with a smooth ride, ideal for the heaviest operations.",
                        maintenanceCosts: "High, with premium components for maximum performance.",
                        horsePower: 650,
                        pullingPower: "Handles up to 85 tons effortlessly.",
                        reliability: "Outstanding, built for maximum durability in tough environments.",
                        price: "$260,000 - $280,000",
                        makeAndModel: "Scania R650, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "650 HP",
                            torque: "4200 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Ultra-high performance",
                    "Efficient fuel system",
                    "Comfort-driven cab design"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R660",
                description: "The ultimate in high-performance trucks for extreme hauls.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 660 Euro 6 SCR",
                        fuelEfficiency: "5.0 km/l",
                        driverBehavior: "Powerful, smooth, and refined, offering excellent performance even under stress.",
                        maintenanceCosts: "High, for unparalleled performance and advanced components.",
                        horsePower: 660,
                        pullingPower: "Can easily manage 90 tons of load.",
                        reliability: "Top-tier, engineered to work for long periods under heavy strain.",
                        price: "$270,000 - $290,000",
                        makeAndModel: "Scania R660, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "660 HP",
                            torque: "4400 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Elite performance engine",
                    "Heavy load capability",
                    "Advanced cabin comfort"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R730",
                description: "World-class truck with extreme hauling power and fuel efficiency.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 730 Euro 6 SCR",
                        fuelEfficiency: "4.8 km/l",
                        driverBehavior: "Exceptional for heavy-duty applications, offering smooth power and torque.",
                        maintenanceCosts: "Very high, due to premium engine components.",
                        horsePower: 730,
                        pullingPower: "Can manage up to 100 tons of load effortlessly.",
                        reliability: "Outstanding, engineered for the most extreme operations.",
                        price: "$300,000 - $320,000",
                        makeAndModel: "Scania R730, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "730 HP",
                            torque: "4600 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Unmatched towing and power capacity",
                    "Top-level comfort features",
                    "Designed for the toughest environments"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            },
            {
                name: "R770",
                description: "The most powerful R-series truck, perfect for the heaviest loads and toughest jobs.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 770 Euro 6 SCR",
                        fuelEfficiency: "4.5 km/l",
                        driverBehavior: "Designed for ultimate strength and endurance with excellent long-haul performance.",
                        maintenanceCosts: "Very high, but worth it for extreme power and reliability.",
                        horsePower: 770,
                        pullingPower: "Handles 120 tons or more with ease.",
                        reliability: "Exceptional, built for the toughest operations in extreme environments.",
                        price: "$330,000 - $350,000",
                        makeAndModel: "Scania R770, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "770 HP",
                            torque: "4800 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Extreme performance",
                    "Maximum load capacity",
                    "Top-tier safety and comfort"
                ],
                img: "https://via.placeholder.com/200" // Replace with actual image URL
            }
        ]
    }
    ,    
    {
        brand: "Scania",
        model: "S-Series",
        imgs: [
            "/img/scaniaSseries.png",
            "/img/scaniaSseries2.png",
            "/img/scaniaSseries3.png",
            "/img/scaniaSseries4.png",
            "/img/scaniaSseries5.png",
            "/img/scaniaSseries6.png",
            "/img/scaniaSseries7.png",
        ],
        models: [
            {
                name: "S410",
                description: "An efficient, entry-level S-Series model with high comfort.",
                highCab: true,
                engines: [
                    {
                        name: "DC13 410 Euro 6 SCR",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Ideal for urban and regional routes with moderate loads.",
                        maintenanceCosts: "Low, leveraging advanced SCR technology.",
                        horsePower: 410,
                        pullingPower: "Handles up to 40 tons efficiently.",
                        reliability: "High, well-suited for consistent operations.",
                        price: "$130,000 - $150,000",
                        makeAndModel: "Scania S410, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "410 HP",
                            torque: "2150 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Spacious high cab design",
                    "Fuel-efficient operation",
                    "Ergonomic driver cockpit"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "S460",
                description: "Efficient model for regional and long-haul transport with medium loads.",
                highCab: true,
                engines: [
                    {
                        name: "DC13 460 Euro 6 SCR",
                        fuelEfficiency: "7.0 km/l",
                        driverBehavior: "Balanced performance for regional and urban routes.",
                        maintenanceCosts: "Moderate, with reliable SCR technology.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 42 tons efficiently.",
                        reliability: "High, designed for consistent performance.",
                        price: "$140,000 - $160,000",
                        makeAndModel: "Scania S460, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2400 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Balanced power and efficiency",
                    "Advanced fuel-saving features",
                    "High cab comfort for long hauls"
                ],
                img: "https://via.placeholder.com/200"
            },
            // S520
            {
                name: "S520",
                description: "Mid-range power S-Series model designed for efficiency and comfort.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 520 Euro 6 SCR",
                        fuelEfficiency: "6.9 km/l",
                        driverBehavior: "Optimized for heavy-duty regional and long-haul transport.",
                        maintenanceCosts: "Moderate, benefiting from extended service intervals.",
                        horsePower: 520,
                        pullingPower: "Effortlessly handles up to 50 tons.",
                        reliability: "High, built for demanding conditions.",
                        price: "$180,000 - $200,000",
                        makeAndModel: "Scania S520, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "520 HP",
                            torque: "2600 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful V8 engine",
                    "Superior fuel efficiency",
                    "Ergonomic cab design"
                ],
                img: "https://via.placeholder.com/200"
            },
            // S530
            {
                name: "S530",
                description: "High-performance S-Series model for demanding hauls.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 530 Euro 6 SCR",
                        fuelEfficiency: "6.7 km/l",
                        driverBehavior: "Optimized for performance and comfort on long-distance routes.",
                        maintenanceCosts: "Moderate to high, with robust components.",
                        horsePower: 530,
                        pullingPower: "Handles up to 55 tons efficiently.",
                        reliability: "Exceptional, designed for versatility.",
                        price: "$190,000 - $220,000",
                        makeAndModel: "Scania S530, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "530 HP",
                            torque: "2700 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Enhanced pulling power",
                    "Premium driver comfort",
                    "Advanced safety features"
                ],
                img: "https://via.placeholder.com/200"
            },
            // S560
            {
                name: "S560",
                description: "Powerful S-Series truck for long hauls and heavy loads.",
                highCab: true,
                engines: [
                    {
                        name: "DC16 V8 560 Euro 6 SCR",
                        fuelEfficiency: "6.4 km/l",
                        driverBehavior: "Excels in heavy-duty scenarios with challenging conditions.",
                        maintenanceCosts: "Moderate, considering advanced engineering.",
                        horsePower: 560,
                        pullingPower: "Easily manages up to 60 tons.",
                        reliability: "High, built for long-term durability.",
                        price: "$210,000 - $230,000",
                        makeAndModel: "Scania S560, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "V8, Turbocharged Diesel",
                            horsepower: "560 HP",
                            torque: "2800 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "V8 engine for unmatched performance",
                    "Optimized for driver efficiency",
                    "High durability for extended operations"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },
    {
        brand: "Scania",
        model: "G-Series",
        imgs: [
            "/img/scaniaGseries.png",
            "/img/scaniaGseries2.png",
            "/img/scaniaGseries3.png",
            "/img/scaniaGseries4.png",
            "/img/scaniaGseries5.png",
            "/img/scaniaGseries6.png",
            "/img/scaniaGseries7.png",
        ],
        models: [
            {
                name: "G410",
                description: "An efficient G-Series model optimized for medium-duty transport.",
                highCab: false,
                engines: [
                    {
                        name: "DC13 410 Euro 6 SCR",
                        fuelEfficiency: "7.8 km/l",
                        driverBehavior: "Well-suited for regional and medium-distance routes.",
                        maintenanceCosts: "Low, with long service intervals.",
                        horsePower: 410,
                        pullingPower: "Manages loads up to 38 tons with ease.",
                        reliability: "High, perfect for consistent performance.",
                        price: "$125,000 - $145,000",
                        makeAndModel: "Scania G410, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "410 HP",
                            torque: "2150 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Compact and efficient design",
                    "Economical fuel consumption",
                    "Reliable performance for regional routes"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "G450",
                description: "A versatile G-Series model for regional and long-haul operations.",
                highCab: true,
                engines: [
                    {
                        name: "DC13 450 Euro 6 SCR",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Balanced performance with high efficiency.",
                        maintenanceCosts: "Moderate, leveraging advanced SCR technology.",
                        horsePower: 450,
                        pullingPower: "Capable of handling up to 42 tons efficiently.",
                        reliability: "High, designed for demanding applications.",
                        price: "$140,000 - $160,000",
                        makeAndModel: "Scania G450, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "450 HP",
                            torque: "2350 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Optimized pulling power",
                    "Comfortable cab with advanced controls",
                    "High fuel efficiency for long routes"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "G460",
                description: "A robust G-Series truck ideal for diverse operations.",
                highCab: true,
                engines: [
                    {
                        name: "DC13 460 Euro 6 SCR",
                        fuelEfficiency: "7.2 km/l",
                        driverBehavior: "Designed for heavy-duty regional transport.",
                        maintenanceCosts: "Moderate, featuring durable components.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 45 tons.",
                        reliability: "High, built for consistent performance.",
                        price: "$145,000 - $165,000",
                        makeAndModel: "Scania G460, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2400 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Enhanced torque for heavy-duty applications",
                    "Ergonomic driver-focused design",
                    "Advanced fuel-saving features"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "G500",
                description: "A powerful G-Series truck for long-haul and heavy-duty transport.",
                highCab: true,
                engines: [
                    {
                        name: "DC13 500 Euro 6 SCR",
                        fuelEfficiency: "6.9 km/l",
                        driverBehavior: "Optimized for heavy-duty operations and long-distance hauls.",
                        maintenanceCosts: "Moderate, thanks to advanced engineering.",
                        horsePower: 500,
                        pullingPower: "Handles up to 50 tons with ease.",
                        reliability: "Exceptional, built for rigorous demands.",
                        price: "$165,000 - $185,000",
                        makeAndModel: "Scania G500, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "500 HP",
                            torque: "2500 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful and efficient engine",
                    "Optimized for long-distance hauling",
                    "Durable chassis for tough conditions"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "G540",
                description: "The most powerful G-Series truck, offering maximum performance.",
                highCab: true,
                engines: [
                    {
                        name: "DC13 540 Euro 6 SCR",
                        fuelEfficiency: "6.6 km/l",
                        driverBehavior: "Designed for exceptional performance in heavy-duty scenarios.",
                        maintenanceCosts: "High, with robust components and premium features.",
                        horsePower: 540,
                        pullingPower: "Effortlessly manages up to 55 tons.",
                        reliability: "Exceptional, built for the toughest conditions.",
                        price: "$185,000 - $205,000",
                        makeAndModel: "Scania G540, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "540 HP",
                            torque: "2700 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Exceptional pulling power",
                    "Premium comfort for long hauls",
                    "Optimized for the most demanding routes"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },
    {
        brand: "Scania",
        model: "P-Series",
        imgs: [
            "/img/scaniaPseries.png",
            "/img/scaniaPseries2.png",
            "/img/scaniaPseries3.png",
            "/img/scaniaPseries4.png",
            "/img/scaniaPseries5.png",
            "/img/scaniaPseries6.png",
            "/img/scaniaPseries7.png",
        ],
        models: [
            {
                name: "P280",
                description: "Compact and efficient truck for urban and regional deliveries.",
                highCab: false,
                engines: [
                    {
                        name: "DC09 280 Euro 6",
                        fuelEfficiency: "8.5 km/l",
                        driverBehavior: "Optimized for city driving and light loads.",
                        maintenanceCosts: "Low, designed for frequent start-stop usage.",
                        horsePower: 280,
                        pullingPower: "Handles loads up to 20 tons effectively.",
                        reliability: "High, designed for urban logistics.",
                        price: "$110,000 - $130,000",
                        makeAndModel: "Scania P280, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-5, Turbocharged Diesel",
                            horsepower: "280 HP",
                            torque: "1400 Nm",
                            transmission: "9-speed manual or Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Compact design for city navigation",
                    "Fuel-efficient engine",
                    "Driver-friendly interior"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "P320",
                description: "A versatile model for regional deliveries and light construction.",
                highCab: false,
                engines: [
                    {
                        name: "DC09 320 Euro 6",
                        fuelEfficiency: "8.0 km/l",
                        driverBehavior: "Ideal for light construction and urban logistics.",
                        maintenanceCosts: "Moderate, with robust components.",
                        horsePower: 320,
                        pullingPower: "Handles up to 25 tons efficiently.",
                        reliability: "High, designed for multi-purpose use.",
                        price: "$120,000 - $140,000",
                        makeAndModel: "Scania P320, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-5, Turbocharged Diesel",
                            horsepower: "320 HP",
                            torque: "1600 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Versatile and efficient",
                    "Optimized for fuel savings",
                    "Durable chassis"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "P360",
                description: "A capable P-Series truck for regional transport and moderate loads.",
                highCab: false,
                engines: [
                    {
                        name: "DC09 360 Euro 6",
                        fuelEfficiency: "7.8 km/l",
                        driverBehavior: "Balanced for efficiency and moderate load hauling.",
                        maintenanceCosts: "Moderate, benefiting from longer service intervals.",
                        horsePower: 360,
                        pullingPower: "Effortlessly handles up to 30 tons.",
                        reliability: "High, built for varied conditions.",
                        price: "$130,000 - $150,000",
                        makeAndModel: "Scania P360, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-5, Turbocharged Diesel",
                            horsepower: "360 HP",
                            torque: "1800 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Robust and versatile",
                    "Efficient for regional hauls",
                    "Driver-centric cabin"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "P410",
                description: "Powerful P-Series model for heavier regional hauls and light construction.",
                highCab: false,
                engines: [
                    {
                        name: "DC13 410 Euro 6",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Excels in regional and light construction operations.",
                        maintenanceCosts: "Moderate, leveraging durable components.",
                        horsePower: 410,
                        pullingPower: "Handles up to 40 tons effectively.",
                        reliability: "High, designed for performance and reliability.",
                        price: "$150,000 - $170,000",
                        makeAndModel: "Scania P410, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "410 HP",
                            torque: "2150 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Enhanced pulling power",
                    "Fuel-efficient technology",
                    "Driver-focused features"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "P450",
                description: "High-capacity P-Series model for demanding regional transport and logistics.",
                highCab: true,
                engines: [
                    {
                        name: "DC13 450 Euro 6",
                        fuelEfficiency: "7.3 km/l",
                        driverBehavior: "Designed for efficiency on long routes.",
                        maintenanceCosts: "Moderate, with extended service cycles.",
                        horsePower: 450,
                        pullingPower: "Handles up to 50 tons efficiently.",
                        reliability: "High, built for heavy-duty usage.",
                        price: "$170,000 - $190,000",
                        makeAndModel: "Scania P450, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "450 HP",
                            torque: "2300 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful performance",
                    "Advanced cab ergonomics",
                    "Optimized for fuel savings"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "P500",
                description: "Top-tier P-Series model for heavy-duty operations and logistics.",
                highCab: true,
                engines: [
                    {
                        name: "DC13 500 Euro 6",
                        fuelEfficiency: "7.0 km/l",
                        driverBehavior: "Optimized for heavy loads and long routes.",
                        maintenanceCosts: "High, due to advanced engineering.",
                        horsePower: 500,
                        pullingPower: "Handles up to 60 tons with ease.",
                        reliability: "Exceptional, designed for long-term usage.",
                        price: "$200,000 - $220,000",
                        makeAndModel: "Scania P500, 2023",
                         engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "500 HP",
                            torque: "2500 Nm",
                            transmission: "12-speed automatic with Opticruise",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Superior pulling power",
                    "Premium cab design",
                    "Advanced safety features"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },
    {
        brand: "Volvo",
        model: "FH",
        imgs: [
            "/img/volvoFHseries.png",
            "/img/volvoFHseries2.png",
            "/img/volvoFHseries3.png",
            "/img/volvoFHseries4.png",
            "/img/volvoFHseries5.png",
            "/img/volvoFHseries6.png",
            "/img/volvoFHseries7.png",
        ],
        models: [
            {
                name: "FH420",
                description: "Versatile truck suitable for regional and long-haul transport.",
                highCab: true,
                engines: [
                    {
                        name: "D13K 420 Euro 6",
                        fuelEfficiency: "7.8 km/l",
                        driverBehavior: "Optimized for fuel economy in mixed terrain.",
                        maintenanceCosts: "Moderate, with long service intervals.",
                        horsePower: 420,
                        pullingPower: "Handles loads up to 30 tons effectively.",
                        reliability: "High, designed for versatile operations.",
                        price: "$120,000 - $150,000",
                        makeAndModel: "Volvo FH420, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "420 HP",
                            torque: "2100 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Efficient drivetrain",
                    "Spacious cabin with modern amenities",
                    "Fuel-saving technology"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FH460",
                description: "Powerful truck designed for heavy loads and long-haul operations.",
                highCab: true,
                engines: [
                    {
                        name: "D13K 460 Euro 6",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Optimized for long-haul fuel efficiency.",
                        maintenanceCosts: "Moderate, with durable components.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "Very high, proven in demanding operations.",
                        price: "$130,000 - $160,000",
                        makeAndModel: "Volvo FH460, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2300 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Advanced cruise control",
                    "Enhanced safety systems",
                    "Driver-friendly cockpit"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FH500",
                description: "High-performance truck for heavy-duty and long-haul operations.",
                highCab: true,
                engines: [
                    {
                        name: "D13K 500 Euro 6",
                        fuelEfficiency: "7.2 km/l",
                        driverBehavior: "Optimized for performance under heavy loads.",
                        maintenanceCosts: "High, with advanced systems.",
                        horsePower: 500,
                        pullingPower: "Handles loads up to 50 tons effectively.",
                        reliability: "Excellent, with robust engineering.",
                        price: "$140,000 - $170,000",
                        makeAndModel: "Volvo FH500, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "500 HP",
                            torque: "2500 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful engine for heavy loads",
                    "Premium driver comfort",
                    "Intelligent fuel optimization"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FH540",
                description: "Designed for the toughest challenges in heavy haulage.",
                highCab: true,
                engines: [
                    {
                        name: "D13K 540 Euro 6",
                        fuelEfficiency: "7.0 km/l",
                        driverBehavior: "Optimized for maximum performance.",
                        maintenanceCosts: "High, suitable for demanding operations.",
                        horsePower: 540,
                        pullingPower: "Handles loads up to 60 tons effectively.",
                        reliability: "Exceptional, built for tough tasks.",
                        price: "$150,000 - $180,000",
                        makeAndModel: "Volvo FH540, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "540 HP",
                            torque: "2600 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High pulling power",
                    "Reinforced chassis",
                    "Advanced traction systems"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FH600",
                description: "Heavy-duty truck with exceptional pulling power.",
                highCab: true,
                engines: [
                    {
                        name: "D16K 600 Euro 6",
                        fuelEfficiency: "6.8 km/l",
                        driverBehavior: "Optimized for extreme performance and payloads.",
                        maintenanceCosts: "High, with robust components.",
                        horsePower: 600,
                        pullingPower: "Handles loads up to 70 tons effectively.",
                        reliability: "Excellent, built for challenging operations.",
                        price: "$160,000 - $200,000",
                        makeAndModel: "Volvo FH600, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "600 HP",
                            torque: "2800 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful engine for extreme loads",
                    "Advanced suspension for stability",
                    "Enhanced driver visibility"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FH650",
                description: "A robust truck built for maximum payload and reliability.",
                highCab: true,
                engines: [
                    {
                        name: "D16K 650 Euro 6",
                        fuelEfficiency: "6.7 km/l",
                        driverBehavior: "Engineered for efficiency with heavy loads.",
                        maintenanceCosts: "High, with premium-grade engineering.",
                        horsePower: 650,
                        pullingPower: "Handles loads up to 75 tons effectively.",
                        reliability: "Unmatched for demanding tasks.",
                        price: "$170,000 - $210,000",
                        makeAndModel: "Volvo FH650, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "650 HP",
                            torque: "3150 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Impressive torque for extreme tasks",
                    "High payload efficiency",
                    "Top-tier durability"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FH700",
                description: "A heavy-haul leader with extraordinary power.",
                highCab: true,
                engines: [
                    {
                        name: "D16K 700 Euro 6",
                        fuelEfficiency: "6.6 km/l",
                        driverBehavior: "Designed for hauling the heaviest loads with ease.",
                        maintenanceCosts: "High, built for extreme durability.",
                        horsePower: 700,
                        pullingPower: "Handles loads up to 80 tons effectively.",
                        reliability: "Top-tier, suited for extreme tasks.",
                        price: "$180,000 - $220,000",
                        makeAndModel: "Volvo FH700, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "700 HP",
                            torque: "3250 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Unmatched power and torque",
                    "Reinforced drivetrain",
                    "Advanced fuel management"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FH750",
                description: "The ultimate heavy-duty truck with unparalleled power.",
                highCab: true,
                engines: [
                    {
                        name: "D16K 750 Euro 6",
                        fuelEfficiency: "6.5 km/l",
                        driverBehavior: "Designed for maximum power and stability.",
                        maintenanceCosts: "High, tailored for extreme heavy-duty tasks.",
                        horsePower: 750,
                        pullingPower: "Handles loads up to 80 tons effectively.",
                        reliability: "Top-tier, engineered for the heaviest loads.",
                        price: "$190,000 - $230,000",
                        makeAndModel: "Volvo FH750, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "750 HP",
                            torque: "3550 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Unmatched engine power",
                    "Advanced safety systems",
                    "Top-tier driver comfort"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    }
    ,{
        brand: "Volvo",
        model: "FMX",
        imgs: [
            "/img/volvoFMXseries.png",
            "/img/volvoFMXseries2.png",
            "/img/volvoFMXseries3.png",
            "/img/volvoFMXseries4.png",
            "/img/volvoFMXseries5.png",
            "/img/volvoFMXseries6.png",
            "/img/volvoFMXseries7.png",
        ],
        models: [
            {
                name: "FMX420",
                description: "Robust construction truck designed for heavy-duty and off-road operations.",
                highCab: true,
                engines: [
                    {
                        name: "D13K 420 Euro 6",
                        fuelEfficiency: "6.5 km/l",
                        driverBehavior: "Optimized for off-road and construction site efficiency.",
                        maintenanceCosts: "Moderate, durable for rough terrain.",
                        horsePower: 420,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "High, built for demanding conditions.",
                        price: "$125,000 - $150,000",
                        makeAndModel: "Volvo FMX420, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "420 HP",
                            torque: "2100 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Heavy-duty chassis for construction tasks",
                    "Off-road capable suspension",
                    "Comfortable cabin for rough terrain"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FMX460",
                description: "High-performance truck for construction and heavy-load transport.",
                highCab: true,
                engines: [
                    {
                        name: "D13K 460 Euro 6",
                        fuelEfficiency: "6.2 km/l",
                        driverBehavior: "Designed for heavy-haul construction applications.",
                        maintenanceCosts: "Moderate, with rugged components.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 50 tons effectively.",
                        reliability: "Very high, engineered for construction sites.",
                        price: "$135,000 - $160,000",
                        makeAndModel: "Volvo FMX460, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2300 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful drivetrain for steep inclines",
                    "Durable axles for extreme loads",
                    "Enhanced safety systems"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FMX500",
                description: "Versatile and powerful truck for off-road and on-road construction tasks.",
                highCab: true,
                engines: [
                    {
                        name: "D13K 500 Euro 6",
                        fuelEfficiency: "6.0 km/l",
                        driverBehavior: "Optimized for construction projects requiring extra power.",
                        maintenanceCosts: "High, with heavy-duty parts.",
                        horsePower: 500,
                        pullingPower: "Handles loads up to 60 tons effectively.",
                        reliability: "Excellent, with advanced durability features.",
                        price: "$145,000 - $170,000",
                        makeAndModel: "Volvo FMX500, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "500 HP",
                            torque: "2500 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Reinforced chassis for heavy-duty tasks",
                    "Optimized fuel consumption for mixed terrain",
                    "Driver-focused cockpit with high visibility"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FMX540",
                description: "Top-tier construction truck for extreme payloads and terrain.",
                highCab: true,
                engines: [
                    {
                        name: "D13K 540 Euro 6",
                        fuelEfficiency: "5.8 km/l",
                        driverBehavior: "Designed for maximum pulling power and off-road resilience.",
                        maintenanceCosts: "High, built for extreme loads.",
                        horsePower: 540,
                        pullingPower: "Handles loads up to 70 tons effectively.",
                        reliability: "Exceptional, engineered for the toughest tasks.",
                        price: "$155,000 - $185,000",
                        makeAndModel: "Volvo FMX540, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "540 HP",
                            torque: "2600 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High pulling capacity for heavy-duty tasks",
                    "Advanced suspension for off-road handling",
                    "Premium driver comfort and safety"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FMX600",
                description: "Heavy-duty construction truck for extreme environments and loads.",
                highCab: true,
                engines: [
                    {
                        name: "D16K 600 Euro 6",
                        fuelEfficiency: "5.5 km/l",
                        driverBehavior: "Designed for extreme payloads and rough terrain.",
                        maintenanceCosts: "High, with premium components.",
                        horsePower: 600,
                        pullingPower: "Handles loads up to 80 tons effectively.",
                        reliability: "Top-tier, built for the heaviest tasks.",
                        price: "$175,000 - $210,000",
                        makeAndModel: "Volvo FMX600, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "600 HP",
                            torque: "2800 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Unmatched power for construction sites",
                    "Rugged build for challenging conditions",
                    "Cutting-edge driver assistance systems"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },{
        brand: "Volvo",
        model: "FM",
        imgs: [
            "/img/volvoFMseries.png",
            "/img/volvoFMseries2.png",
            "/img/volvoFMseries3.png",
            "/img/volvoFMseries4.png",
            "/img/volvoFMseries5.png",
            "/img/volvoFMseries6.png",
            "/img/volvoFMseries7.png",
        ],
        models: [
            {
                name: "FM330",
                description: "Reliable and efficient truck for regional and urban transport.",
                highCab: false,
                engines: [
                    {
                        name: "D11K 330 Euro 6",
                        fuelEfficiency: "8.8 km/l",
                        driverBehavior: "Optimized for light to medium loads.",
                        maintenanceCosts: "Low, with minimal wear for regional use.",
                        horsePower: 330,
                        pullingPower: "Handles loads up to 25 tons effectively.",
                        reliability: "High, designed for consistent performance.",
                        price: "$100,000 - $125,000",
                        makeAndModel: "Volvo FM330, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "330 HP",
                            torque: "1600 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-efficient for regional logistics",
                    "Compact and driver-friendly cabin",
                    "Smooth handling for city navigation"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FM370",
                description: "Versatile truck for mixed regional and inter-city transport.",
                highCab: false,
                engines: [
                    {
                        name: "D11K 370 Euro 6",
                        fuelEfficiency: "8.5 km/l",
                        driverBehavior: "Optimized for mixed terrain and moderate loads.",
                        maintenanceCosts: "Moderate, with robust components.",
                        horsePower: 370,
                        pullingPower: "Handles loads up to 30 tons effectively.",
                        reliability: "High, suited for varied tasks.",
                        price: "$110,000 - $135,000",
                        makeAndModel: "Volvo FM370, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "370 HP",
                            torque: "1750 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-efficient drivetrain",
                    "Durable for mixed usage scenarios",
                    "Ergonomic cabin design"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FM410",
                description: "Efficient truck for long-haul and regional transport needs.",
                highCab: true,
                engines: [
                    {
                        name: "D11K 410 Euro 6",
                        fuelEfficiency: "7.8 km/l",
                        driverBehavior: "Designed for fuel-efficient long-haul operations.",
                        maintenanceCosts: "Moderate, with reliable components.",
                        horsePower: 410,
                        pullingPower: "Handles loads up to 35 tons effectively.",
                        reliability: "Very high, built for sustained performance.",
                        price: "$120,000 - $145,000",
                        makeAndModel: "Volvo FM410, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "410 HP",
                            torque: "1950 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Economical for long-haul drives",
                    "Spacious and comfortable cabin",
                    "Reliable under varying loads"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FM460",
                description: "Powerful truck for heavy-duty logistics and long-haul transport.",
                highCab: true,
                engines: [
                    {
                        name: "D11K 460 Euro 6",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Engineered for high-performance under heavy loads.",
                        maintenanceCosts: "Moderate, with advanced durability.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "Very high, suitable for long-distance operations.",
                        price: "$135,000 - $160,000",
                        makeAndModel: "Volvo FM460, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2200 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High torque for heavy loads",
                    "Efficient fuel consumption",
                    "Driver-focused cockpit design"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FM500",
                description: "Versatile truck for heavy loads and mixed logistics.",
                highCab: true,
                engines: [
                    {
                        name: "D13K 500 Euro 6",
                        fuelEfficiency: "7.2 km/l",
                        driverBehavior: "Designed for both heavy haulage and efficiency.",
                        maintenanceCosts: "High, with premium-grade components.",
                        horsePower: 500,
                        pullingPower: "Handles loads up to 50 tons effectively.",
                        reliability: "Excellent, built for demanding tasks.",
                        price: "$145,000 - $170,000",
                        makeAndModel: "Volvo FM500, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "500 HP",
                            torque: "2500 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Unmatched versatility for logistics",
                    "Enhanced safety systems",
                    "Driver comfort for long hauls"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FM540",
                description: "Heavy-duty truck with exceptional power and efficiency.",
                highCab: true,
                engines: [
                    {
                        name: "D13K 540 Euro 6",
                        fuelEfficiency: "7.0 km/l",
                        driverBehavior: "Optimized for maximum payload and performance.",
                        maintenanceCosts: "High, with components built for rugged use.",
                        horsePower: 540,
                        pullingPower: "Handles loads up to 60 tons effectively.",
                        reliability: "Top-tier, designed for the heaviest tasks.",
                        price: "$155,000 - $190,000",
                        makeAndModel: "Volvo FM540, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "540 HP",
                            torque: "2600 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High pulling power for demanding tasks",
                    "Advanced suspension for mixed terrain",
                    "Premium cabin comfort"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },{
        brand: "Volvo",
        model: "FE",
        imgs: [
            "/img/volvoFEseries.png",
            "/img/volvoFEseries2.png",
            "/img/volvoFEseries3.png",
            "/img/volvoFEseries4.png",
            "/img/volvoFEseries5.png",
            "/img/volvoFEseries6.png",
            "/img/volvoFEseries7.png",
        ],
        models: [
            {
                name: "FE240",
                description: "Efficient truck for urban distribution and short-haul transport.",
                highCab: false,
                engines: [
                    {
                        name: "D8K 240 Euro 6",
                        fuelEfficiency: "9.0 km/l",
                        driverBehavior: "Optimized for frequent stop-start and urban delivery.",
                        maintenanceCosts: "Low, with durable components.",
                        horsePower: 240,
                        pullingPower: "Handles loads up to 18 tons effectively.",
                        reliability: "High, designed for urban and regional logistics.",
                        price: "$90,000 - $110,000",
                        makeAndModel: "Volvo FE240, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "240 HP",
                            torque: "900 Nm",
                            transmission: "I-Shift 6-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Compact and maneuverable design",
                    "Eco-friendly engine for urban use",
                    "Enhanced driver visibility"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FE280",
                description: "Multi-purpose truck for urban and regional transport.",
                highCab: false,
                engines: [
                    {
                        name: "D8K 280 Euro 6",
                        fuelEfficiency: "8.8 km/l",
                        driverBehavior: "Optimized for regional fuel economy.",
                        maintenanceCosts: "Moderate, built for mixed-use operations.",
                        horsePower: 280,
                        pullingPower: "Handles loads up to 20 tons effectively.",
                        reliability: "High, versatile for various applications.",
                        price: "$100,000 - $120,000",
                        makeAndModel: "Volvo FE280, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "280 HP",
                            torque: "1050 Nm",
                            transmission: "I-Shift 6-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-efficient powertrain",
                    "Spacious cabin with ergonomic design",
                    "Wide application versatility"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FE320",
                description: "Heavy-duty truck designed for demanding urban and regional tasks.",
                highCab: false,
                engines: [
                    {
                        name: "D8K 320 Euro 6",
                        fuelEfficiency: "8.5 km/l",
                        driverBehavior: "Built for performance under heavier loads.",
                        maintenanceCosts: "Moderate, with durable engineering.",
                        horsePower: 320,
                        pullingPower: "Handles loads up to 26 tons effectively.",
                        reliability: "Very high, proven in heavy-duty operations.",
                        price: "$110,000 - $130,000",
                        makeAndModel: "Volvo FE320, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "320 HP",
                            torque: "1200 Nm",
                            transmission: "I-Shift 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High pulling power for urban tasks",
                    "Strong chassis for demanding jobs",
                    "Driver-centric interior with modern amenities"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "FE Electric",
                description: "Eco-friendly, zero-emission truck for urban and regional distribution.",
                highCab: false,
                engines: [
                    {
                        name: "Electric Powertrain",
                        fuelEfficiency: "Up to 300 km range per charge",
                        driverBehavior: "Smooth acceleration and quiet operation.",
                        maintenanceCosts: "Low, with fewer mechanical components.",
                        horsePower: 400,
                        pullingPower: "Handles loads up to 27 tons effectively.",
                        reliability: "High, built for urban logistics.",
                        price: "$300,000 - $350,000",
                        makeAndModel: "Volvo FE Electric, 2023",
                        engineReleaseYear: 2021,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Electric motor",
                            horsepower: "400 HP",
                            torque: "850 Nm",
                            transmission: "Single-speed transmission",
                            fuelType: "Electric"
                        }
                    }
                ],
                features: [
                    "Zero emissions and eco-friendly operation",
                    "Quiet and efficient for city use",
                    "Advanced battery technology with rapid charging"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },{
        brand: "Daf",
        model: "XF",
        imgs: [
            "/img/dafXFseries.png",
            "/img/dafXFseries2.png",
            "/img/dafXFseries3.png",
            "/img/dafXFseries4.png",
            "/img/dafXFseries5.png",
            "/img/dafXFseries6.png",
            "/img/dafXFseries7.png",
        ],
        models: [
            {
                name: "XF410",
                description: "Versatile long-haul truck optimized for fuel efficiency and driver comfort.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR MX-11 410 Euro 6",
                        fuelEfficiency: "8.3 km/l",
                        driverBehavior: "Optimized for balanced performance and economy.",
                        maintenanceCosts: "Low, with long service intervals.",
                        horsePower: 410,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "High, designed for long-haul operations.",
                        price: "$110,000 - $140,000",
                        makeAndModel: "DAF XF410, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "410 HP",
                            torque: "2100 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "EcoMode driving system",
                    "Efficient fuel injection",
                    "Comfortable and spacious cabin"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "XF440",
                description: "Reliable truck optimized for heavy payloads and long-distance routes.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR MX-11 440 Euro 6",
                        fuelEfficiency: "8.1 km/l",
                        driverBehavior: "Engineered for consistent performance under moderate loads.",
                        maintenanceCosts: "Moderate, with durable components.",
                        horsePower: 440,
                        pullingPower: "Handles loads up to 42 tons effectively.",
                        reliability: "High, suited for regional and long-haul operations.",
                        price: "$115,000 - $145,000",
                        makeAndModel: "DAF XF440, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "440 HP",
                            torque: "2200 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High fuel efficiency for its class",
                    "Advanced driver assistance systems",
                    "Optimized engine performance for diverse conditions"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "XF450",
                description: "Fuel-efficient truck designed for regional and long-haul transport.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR MX-11 450 Euro 6",
                        fuelEfficiency: "8.0 km/l",
                        driverBehavior: "Optimized for steady long-distance driving.",
                        maintenanceCosts: "Moderate, with durable components.",
                        horsePower: 450,
                        pullingPower: "Handles loads up to 44 tons effectively.",
                        reliability: "Very high, proven in demanding operations.",
                        price: "$120,000 - $150,000",
                        makeAndModel: "DAF XF450, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "450 HP",
                            torque: "2350 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High torque output for heavy loads",
                    "Advanced fuel-saving technology",
                    "Driver-centric controls and features"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "XF460",
                description: "Durable and efficient truck designed for heavy loads over long distances.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR MX-11 460 Euro 6",
                        fuelEfficiency: "7.9 km/l",
                        driverBehavior: "Engineered for reliability and consistent fuel economy.",
                        maintenanceCosts: "Moderate, with robust design.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 46 tons effectively.",
                        reliability: "High, with proven long-term performance.",
                        price: "$125,000 - $155,000",
                        makeAndModel: "DAF XF460, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2400 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Enhanced aerodynamics for fuel efficiency",
                    "Driver comfort-focused features",
                    "Exceptional pulling power for its class"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "XF480",
                description: "Heavy-duty truck designed for maximum efficiency and power.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR MX-13 480 Euro 6",
                        fuelEfficiency: "7.8 km/l",
                        driverBehavior: "Optimized for demanding transport with heavy loads.",
                        maintenanceCosts: "Moderate, built for rigorous operations.",
                        horsePower: 480,
                        pullingPower: "Handles loads up to 50 tons effectively.",
                        reliability: "High, ideal for long-haul and intercontinental transport.",
                        price: "$130,000 - $160,000",
                        makeAndModel: "DAF XF480, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "480 HP",
                            torque: "2500 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Enhanced aerodynamics for fuel efficiency",
                    "Large payload capacity",
                    "State-of-the-art cabin comfort"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "XF510",
                description: "Premium truck built for heavy-duty tasks with unmatched comfort and safety.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR MX-13 510 Euro 6",
                        fuelEfficiency: "7.6 km/l",
                        driverBehavior: "Engineered for high performance and fuel efficiency.",
                        maintenanceCosts: "High, optimized for intensive operations.",
                        horsePower: 510,
                        pullingPower: "Handles loads up to 55 tons effectively.",
                        reliability: "Excellent, with a durable and powerful design.",
                        price: "$135,000 - $165,000",
                        makeAndModel: "DAF XF510, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "510 HP",
                            torque: "2550 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Luxury cabin design",
                    "Advanced safety and driver-assist systems",
                    "Powerful and efficient drivetrain"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "XF530",
                description: "The flagship model built for maximum performance and heavy haulage.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR MX-13 530 Euro 6",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Engineered for high performance and top pulling power.",
                        maintenanceCosts: "High, tailored for extreme tasks.",
                        horsePower: 530,
                        pullingPower: "Handles loads up to 60 tons effectively.",
                        reliability: "Exceptional, designed for heavy-duty operations.",
                        price: "$140,000 - $180,000",
                        makeAndModel: "DAF XF530, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "530 HP",
                            torque: "2600 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Unparalleled pulling power",
                    "High-strength chassis for durability",
                    "Luxury interior with advanced safety features"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },{
        brand: "Daf",
        model: "CF",
        imgs: [
            "/img/dafCFseries.png",
            "/img/dafCFseries2.png",
            "/img/dafCFseries3.png",
            "/img/dafCFseries4.png",
            "/img/dafCFseries5.png",
            "/img/dafCFseries6.png",
            "/img/dafCFseries7.png",
        ],
        models: [
            {
                name: "CF290",
                description: "Compact and efficient truck for regional and urban transport.",
                highCab: false,
                engines: [
                    {
                        name: "PACCAR PX-7 290 Euro 6",
                        fuelEfficiency: "9.5 km/l",
                        driverBehavior: "Optimized for city driving and regional deliveries.",
                        maintenanceCosts: "Low, with durable design for frequent use.",
                        horsePower: 290,
                        pullingPower: "Handles loads up to 18 tons effectively.",
                        reliability: "High, designed for light to medium-duty applications.",
                        price: "$90,000 - $120,000",
                        makeAndModel: "DAF CF290, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "290 HP",
                            torque: "1100 Nm",
                            transmission: "ZF TraXon 9-speed manual or automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Compact design for urban navigation",
                    "Driver-focused interior",
                    "Excellent fuel economy for short routes"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "CF340",
                description: "Versatile truck designed for medium-duty regional transport.",
                highCab: false,
                engines: [
                    {
                        name: "PACCAR PX-7 340 Euro 6",
                        fuelEfficiency: "9.0 km/l",
                        driverBehavior: "Optimized for balanced performance and economy.",
                        maintenanceCosts: "Low, ideal for medium-range tasks.",
                        horsePower: 340,
                        pullingPower: "Handles loads up to 22 tons effectively.",
                        reliability: "Very high, proven in regional logistics.",
                        price: "$100,000 - $130,000",
                        makeAndModel: "DAF CF340, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "340 HP",
                            torque: "1200 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High fuel efficiency for its class",
                    "Low maintenance requirements",
                    "Driver-centric features for comfort"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "CF410",
                description: "Reliable truck built for regional and long-distance transportation.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR MX-11 410 Euro 6",
                        fuelEfficiency: "8.5 km/l",
                        driverBehavior: "Designed for steady performance on regional routes.",
                        maintenanceCosts: "Moderate, built for durability.",
                        horsePower: 410,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "High, suited for diverse transport tasks.",
                        price: "$120,000 - $145,000",
                        makeAndModel: "DAF CF410, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "410 HP",
                            torque: "2100 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-saving engine design",
                    "Driver-friendly cabin and controls",
                    "Efficient for regional and long-haul operations"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "CF440",
                description: "Heavy-duty truck ideal for long-haul and regional logistics.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR MX-11 440 Euro 6",
                        fuelEfficiency: "8.3 km/l",
                        driverBehavior: "Optimized for high efficiency with moderate loads.",
                        maintenanceCosts: "Moderate, with durable parts.",
                        horsePower: 440,
                        pullingPower: "Handles loads up to 42 tons effectively.",
                        reliability: "High, designed for versatile operations.",
                        price: "$125,000 - $150,000",
                        makeAndModel: "DAF CF440, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "440 HP",
                            torque: "2200 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-efficient design for long hauls",
                    "Advanced driver assistance systems",
                    "Durable and reliable engine performance"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "CF460",
                description: "Powerful and efficient truck for heavy loads and long-distance operations.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR MX-13 460 Euro 6",
                        fuelEfficiency: "8.0 km/l",
                        driverBehavior: "Optimized for reliability and fuel savings on long routes.",
                        maintenanceCosts: "Moderate, designed for heavy-duty operations.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 46 tons effectively.",
                        reliability: "Very high, engineered for endurance.",
                        price: "$130,000 - $160,000",
                        makeAndModel: "DAF CF460, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2400 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Efficient engine with high torque output",
                    "Enhanced cabin comfort for long drives",
                    "Reliable drivetrain for heavy-duty tasks"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "CF510",
                description: "Premium heavy-duty truck for the most demanding transport operations.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR MX-13 510 Euro 6",
                        fuelEfficiency: "7.8 km/l",
                        driverBehavior: "Built for performance and heavy-duty operations.",
                        maintenanceCosts: "High, suited for intensive tasks.",
                        horsePower: 510,
                        pullingPower: "Handles loads up to 50 tons effectively.",
                        reliability: "Exceptional, designed for tough tasks.",
                        price: "$135,000 - $170,000",
                        makeAndModel: "DAF CF510, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "510 HP",
                            torque: "2550 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Advanced safety systems",
                    "Luxury driver-centric cabin",
                    "Unmatched pulling power for its class"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },
    {
        brand: "Daf",
        model: "LF",
        imgs: [
            "/img/dafLFseries.png",
            "/img/dafLFseries2.png",
            "/img/dafLFseries3.png",
            "/img/dafLFseries4.png",
            "/img/dafLFseries5.png",
            "/img/dafLFseries6.png",
            "/img/dafLFseries7.png",
        ],
        models: [
            {
                name: "LF150",
                description: "Compact truck for urban deliveries and light logistics.",
                highCab: false,
                engines: [
                    {
                        name: "PACCAR PX-4 150 Euro 6",
                        fuelEfficiency: "12.0 km/l",
                        driverBehavior: "Optimized for city driving and frequent stops.",
                        maintenanceCosts: "Low, built for durability in urban settings.",
                        horsePower: 150,
                        pullingPower: "Handles loads up to 8 tons effectively.",
                        reliability: "Very high, suitable for urban operations.",
                        price: "$50,000 - $70,000",
                        makeAndModel: "DAF LF150, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-4, Turbocharged Diesel",
                            horsepower: "150 HP",
                            torque: "600 Nm",
                            transmission: "6-speed manual or automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Compact design for tight urban spaces",
                    "High fuel efficiency",
                    "Low operating costs"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "LF180",
                description: "Reliable truck for urban and short regional transport.",
                highCab: false,
                engines: [
                    {
                        name: "PACCAR PX-4 180 Euro 6",
                        fuelEfficiency: "11.5 km/l",
                        driverBehavior: "Designed for urban deliveries with medium loads.",
                        maintenanceCosts: "Low, with easy serviceability.",
                        horsePower: 180,
                        pullingPower: "Handles loads up to 12 tons effectively.",
                        reliability: "High, built for frequent use.",
                        price: "$60,000 - $80,000",
                        makeAndModel: "DAF LF180, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-4, Turbocharged Diesel",
                            horsepower: "180 HP",
                            torque: "700 Nm",
                            transmission: "6-speed manual or automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Efficient engine for urban logistics",
                    "Spacious cabin for driver comfort",
                    "Advanced safety features"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "LF210",
                description: "Versatile truck for regional and light intercity transport.",
                highCab: false,
                engines: [
                    {
                        name: "PACCAR PX-5 210 Euro 6",
                        fuelEfficiency: "11.0 km/l",
                        driverBehavior: "Optimized for mixed urban and regional operations.",
                        maintenanceCosts: "Moderate, with durable components.",
                        horsePower: 210,
                        pullingPower: "Handles loads up to 15 tons effectively.",
                        reliability: "Very high, suited for diverse tasks.",
                        price: "$70,000 - $90,000",
                        makeAndModel: "DAF LF210, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-4, Turbocharged Diesel",
                            horsepower: "210 HP",
                            torque: "850 Nm",
                            transmission: "6-speed manual or automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-efficient design",
                    "Driver-friendly layout",
                    "Advanced connectivity features"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "LF230",
                description: "Heavy-duty urban truck for larger payloads and regional use.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR PX-5 230 Euro 6",
                        fuelEfficiency: "10.5 km/l",
                        driverBehavior: "Built for efficient transport of heavier loads.",
                        maintenanceCosts: "Moderate, engineered for regular use.",
                        horsePower: 230,
                        pullingPower: "Handles loads up to 18 tons effectively.",
                        reliability: "High, ideal for demanding tasks.",
                        price: "$80,000 - $100,000",
                        makeAndModel: "DAF LF230, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-4, Turbocharged Diesel",
                            horsepower: "230 HP",
                            torque: "900 Nm",
                            transmission: "6-speed manual or automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Robust drivetrain",
                    "Enhanced driver visibility",
                    "Fuel-saving technology"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "LF260",
                description: "High-performance truck for regional logistics and heavy loads.",
                highCab: true,
                engines: [
                    {
                        name: "PACCAR PX-7 260 Euro 6",
                        fuelEfficiency: "10.0 km/l",
                        driverBehavior: "Optimized for long-range operations.",
                        maintenanceCosts: "Moderate, designed for endurance.",
                        horsePower: 260,
                        pullingPower: "Handles loads up to 20 tons effectively.",
                        reliability: "Exceptional, engineered for reliability.",
                        price: "$90,000 - $120,000",
                        makeAndModel: "DAF LF260, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "260 HP",
                            torque: "1000 Nm",
                            transmission: "ZF TraXon 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful yet efficient engine",
                    "Enhanced cabin for driver comfort",
                    "Ideal for regional transport tasks"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },{
        brand: "Mercedes",
        model: "Actros",
        imgs: [
            "/img/mercedesActrosseries.png",
            "/img/mercedesActrosseries2.png",
            "/img/mercedesActrosseries3.png",
            "/img/mercedesActrosseries4.png",
            "/img/mercedesActrosseries5.png",
            "/img/mercedesActrosseries6.png",
            "/img/mercedesActrosseries7.png",
        ],
        models: [
            {
                name: "Actros 1840",
                description: "Versatile truck designed for regional and long-haul operations.",
                highCab: true,
                engines: [
                    {
                        name: "OM 470 Euro 6",
                        fuelEfficiency: 7.9,
                        driverBehavior: "Optimized for fuel economy and reliability.",
                        maintenanceCosts: "Moderate, with long service intervals.",
                        horsePower: 400,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "High, designed for diverse operations.",
                        price: 120000,
                        makeAndModel: "Mercedes Actros 1840, 2023",
                        engineReleaseYear: 2011,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 400,
                            torque: 2000,
                            transmission: "Mercedes PowerShift 3 automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Efficient drivetrain",
                    "Advanced safety systems",
                    "Spacious and ergonomic cabin"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Actros 1842",
                description: "A versatile truck suited for heavy-duty regional operations and long-distance hauls.",
                highCab: true,
                engines: [
                    {
                        name: "OM 470 Euro 6",
                        fuelEfficiency: 7.6,
                        driverBehavior: "Designed for fuel efficiency and reliability in long-haul transport.",
                        maintenanceCosts: "Moderate, with frequent service intervals.",
                        horsePower: 420,
                        pullingPower: "Handles loads up to 42 tons.",
                        reliability: "Very high, built for demanding tasks.",
                        price: 125000,
                        makeAndModel: "Mercedes Actros 1842, 2023",
                        engineReleaseYear: 2011,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 420,
                            torque: 2100,
                            transmission: "Mercedes PowerShift 3 automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Efficient aerodynamics",
                    "Advanced safety features",
                    "Comfortable cabin for long drives"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Actros 1845",
                description: "High-performance truck optimized for long-haul transport.",
                highCab: true,
                engines: [
                    {
                        name: "OM 471 Euro 6",
                        fuelEfficiency: 7.5,
                        driverBehavior: "Designed for maximum efficiency over long distances.",
                        maintenanceCosts: "Moderate, with durable engineering.",
                        horsePower: 450,
                        pullingPower: "Handles loads up to 44 tons effectively.",
                        reliability: "Very high, ideal for long-haul operations.",
                        price: 130000,
                        makeAndModel: "Mercedes Actros 1845, 2023",
                        engineReleaseYear: 2011,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 450,
                            torque: 2200,
                            transmission: "Mercedes PowerShift 3 automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Aerodynamic design for improved fuel efficiency",
                    "Enhanced driver assistance systems",
                    "Premium interior for long-haul comfort"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Actros 1851",
                description: "Robust truck for heavy-duty and long-distance transport.",
                highCab: true,
                engines: [
                    {
                        name: "OM 471 Euro 6",
                        fuelEfficiency: 7.3,
                        driverBehavior: "Optimized for power and performance.",
                        maintenanceCosts: "Moderate, with advanced systems.",
                        horsePower: 510,
                        pullingPower: "Handles loads up to 50 tons effectively.",
                        reliability: "Excellent, designed for demanding tasks.",
                        price: 140000,
                        makeAndModel: "Mercedes Actros 1851, 2023",
                        engineReleaseYear: 2011,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 510,
                            torque: 2500,
                            transmission: "Mercedes PowerShift 3 automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful engine for heavy loads",
                    "Advanced driver comfort features",
                    "Intelligent connectivity for fleet management"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Actros 1863",
                description: "Top-tier truck for the most demanding transport tasks.",
                highCab: true,
                engines: [
                    {
                        name: "OM 473 Euro 6",
                        fuelEfficiency: 6.9,
                        driverBehavior: "Built for maximum power and stability.",
                        maintenanceCosts: "High, engineered for extreme operations.",
                        horsePower: 630,
                        pullingPower: "Handles loads up to 80 tons effectively.",
                        reliability: "Exceptional, built for heavy-duty performance.",
                        price: 160000,
                        makeAndModel: "Mercedes Actros 1863, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 630,
                            torque: 3000,
                            transmission: "Mercedes PowerShift 3 automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Unmatched pulling power",
                    "Luxurious driver environment",
                    "Cutting-edge safety technology"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Actros 1858",
                description: "Heavy-duty truck for long-haul operations with unparalleled reliability.",
                highCab: true,
                engines: [
                    {
                        name: "OM 473 Euro 6",
                        fuelEfficiency: 7.0,
                        driverBehavior: "Designed for consistent performance under heavy loads.",
                        maintenanceCosts: "High, suitable for demanding operations.",
                        horsePower: 580,
                        pullingPower: "Handles loads up to 70 tons effectively.",
                        reliability: "Top-tier, engineered for long-lasting performance.",
                        price: 150000,
                        makeAndModel: "Mercedes Actros 1858, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 580,
                            torque: 2800,
                            transmission: "Mercedes PowerShift 3 automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Advanced driver assistance",
                    "High torque for challenging terrain",
                    "Spacious and ergonomic cabin design"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },
    {
        brand: "Mercedes",
        model: "Arocs",
        imgs: [
            "/img/mercedesArocsseries.png",
            "/img/mercedesArocsseries2.png",
            "/img/mercedesArocsseries3.png",
            "/img/mercedesArocsseries4.png",
            "/img/mercedesArocsseries5.png",
            "/img/mercedesArocsseries6.png",
            "/img/mercedesArocsseries7.png",
        ],
        models: [
            {
                name: "Arocs 1840",
                description: "Versatile truck designed for regional and heavy-duty transport.",
                highCab: true,
                engines: [
                    {
                        name: "OM 470 Euro 6",
                        fuelEfficiency: 7.8,
                        driverBehavior: "Optimized for balanced fuel economy and power.",
                        maintenanceCosts: "Moderate, with extended service intervals.",
                        horsePower: 400,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "High, built for demanding jobs.",
                        price: 120000,
                        makeAndModel: "Mercedes Arocs 1840, 2023",
                        engineReleaseYear: 2011,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 400,
                            torque: 2000,
                            transmission: "Mercedes PowerShift 3 automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Efficient drivetrain for heavy-duty tasks",
                    "Comfortable cabin for long shifts",
                    "Advanced safety systems"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Arocs 1845",
                description: "High-performance truck optimized for long-haul and construction work.",
                highCab: true,
                engines: [
                    {
                        name: "OM 471 Euro 6",
                        fuelEfficiency: 7.4,
                        driverBehavior: "Maximizes power and efficiency for long-distance haulage.",
                        maintenanceCosts: "Moderate, with long-lasting components.",
                        horsePower: 450,
                        pullingPower: "Handles loads up to 44 tons.",
                        reliability: "Very high, designed for tough conditions.",
                        price: 130000,
                        makeAndModel: "Mercedes Arocs 1845, 2023",
                        engineReleaseYear: 2011,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 450,
                            torque: 2200,
                            transmission: "Mercedes PowerShift 3 automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Aerodynamic design for improved fuel economy",
                    "Driver-friendly features for long-haul comfort",
                    "Strong performance on challenging terrains"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Arocs 1851",
                description: "Heavy-duty truck designed for extreme workloads in construction and heavy transport.",
                highCab: true,
                engines: [
                    {
                        name: "OM 471 Euro 6",
                        fuelEfficiency: 7.1,
                        driverBehavior: "Built for heavy loads and rough terrain.",
                        maintenanceCosts: "Moderate, durable components for high-stress tasks.",
                        horsePower: 510,
                        pullingPower: "Handles loads up to 50 tons effectively.",
                        reliability: "Excellent, designed for tough conditions.",
                        price: 140000,
                        makeAndModel: "Mercedes Arocs 1851, 2023",
                        engineReleaseYear: 2011,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 510,
                            torque: 2500,
                            transmission: "Mercedes PowerShift 3 automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful engine for demanding jobs",
                    "Advanced safety features for construction sites",
                    "Superior driver comfort"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Arocs 1863",
                description: "Top-tier truck for the most demanding construction and transport tasks.",
                highCab: true,
                engines: [
                    {
                        name: "OM 473 Euro 6",
                        fuelEfficiency: 6.8,
                        driverBehavior: "Built for maximum stability and power in heavy-duty operations.",
                        maintenanceCosts: "High, designed for extreme conditions.",
                        horsePower: 630,
                        pullingPower: "Handles loads up to 80 tons effectively.",
                        reliability: "Exceptional, built for the toughest tasks.",
                        price: 160000,
                        makeAndModel: "Mercedes Arocs 1863, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 630,
                            torque: 3000,
                            transmission: "Mercedes PowerShift 3 automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Unmatched pulling power for construction tasks",
                    "Luxurious cabin for long-haul comfort",
                    "Cutting-edge safety technology"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Arocs 1858",
                description: "Heavy-duty truck for extreme construction and transport operations.",
                highCab: true,
                engines: [
                    {
                        name: "OM 473 Euro 6",
                        fuelEfficiency: 7.0,
                        driverBehavior: "Optimized for consistent power under heavy loads.",
                        maintenanceCosts: "High, durable for demanding operations.",
                        horsePower: 580,
                        pullingPower: "Handles loads up to 70 tons effectively.",
                        reliability: "Top-tier, engineered for heavy-duty performance.",
                        price: 150000,
                        makeAndModel: "Mercedes Arocs 1858, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 580,
                            torque: 2800,
                            transmission: "Mercedes PowerShift 3 automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful torque for challenging construction sites",
                    "Comfortable and spacious driver cabin",
                    "Advanced safety systems for maximum reliability"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },
    {
        brand: "Mercedes",
        model: "Econic",
        imgs: [
            "/img/mercedesEconicseries.png",
            "/img/mercedesEconicseries2.png",
            "/img/mercedesEconicseries3.png",
            "/img/mercedesEconicseries4.png",
            "/img/mercedesEconicseries5.png",
            "/img/mercedesEconicseries6.png",
            "/img/mercedesEconicseries7.png",
        ],
        models: [
            {
                name: "Econic 1824",
                description: "Efficient truck designed for urban delivery and waste collection.",
                highCab: true,
                engines: [
                    {
                        name: "OM 936 Euro 6",
                        fuelEfficiency: 8.0,
                        driverBehavior: "Optimized for city driving and low fuel consumption.",
                        maintenanceCosts: "Moderate, with simple maintenance requirements.",
                        horsePower: 240,
                        pullingPower: "Handles loads up to 18 tons effectively.",
                        reliability: "Very high, engineered for frequent stop-and-go city traffic.",
                        price: 100000,
                        makeAndModel: "Mercedes Econic 1824, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 240,
                            torque: 1200,
                            transmission: "Mercedes PowerShift automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Low-entry cab for easy access",
                    "Excellent fuel efficiency for urban tasks",
                    "Designed for short-haul and frequent stop operations"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Econic 1830",
                description: "Medium-duty truck for urban waste collection, logistics, and municipal services.",
                highCab: true,
                engines: [
                    {
                        name: "OM 936 Euro 6",
                        fuelEfficiency: 7.8,
                        driverBehavior: "Built for short trips with frequent stops.",
                        maintenanceCosts: "Low, designed to minimize downtime.",
                        horsePower: 280,
                        pullingPower: "Handles loads up to 20 tons effectively.",
                        reliability: "High, optimized for municipal use.",
                        price: 110000,
                        makeAndModel: "Mercedes Econic 1830, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 280,
                            torque: 1400,
                            transmission: "Mercedes PowerShift automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Compact and efficient design for city streets",
                    "Low-entry cab with excellent driver visibility",
                    "Built-in safety features for urban environments"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Econic 1840",
                description: "Heavy-duty truck designed for urban delivery, construction, and waste management.",
                highCab: true,
                engines: [
                    {
                        name: "OM 936 Euro 6",
                        fuelEfficiency: 7.5,
                        driverBehavior: "Perfectly suited for handling larger urban loads.",
                        maintenanceCosts: "Moderate, designed to balance performance and maintenance.",
                        horsePower: 300,
                        pullingPower: "Handles loads up to 24 tons effectively.",
                        reliability: "Very high, engineered for demanding city tasks.",
                        price: 120000,
                        makeAndModel: "Mercedes Econic 1840, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 300,
                            torque: 1500,
                            transmission: "Mercedes PowerShift automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Enhanced stability for heavy urban loads",
                    "Low-entry for driver ease and comfort",
                    "Robust design for urban construction tasks"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Econic 1850",
                description: "High-performance truck designed for waste collection, distribution, and municipal services.",
                highCab: true,
                engines: [
                    {
                        name: "OM 470 Euro 6",
                        fuelEfficiency: 7.0,
                        driverBehavior: "Built for high performance and efficient urban deliveries.",
                        maintenanceCosts: "Moderate, durable components for long-lasting use.",
                        horsePower: 350,
                        pullingPower: "Handles loads up to 30 tons effectively.",
                        reliability: "Outstanding, built for heavy-duty urban and waste collection tasks.",
                        price: 130000,
                        makeAndModel: "Mercedes Econic 1850, 2023",
                        engineReleaseYear: 2011,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 350,
                            torque: 1800,
                            transmission: "Mercedes PowerShift automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High-performance engine for heavy loads",
                    "Low-entry cab with superior driver ergonomics",
                    "Advanced safety features for urban areas"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },
    {
        brand: "Man",
        model: "TGX",
        imgs: [
            "/img/manTGXseries.png",
            "/img/manTGXseries2.png",
            "/img/manTGXseries3.png",
            "/img/manTGXseries4.png",
            "/img/manTGXseries5.png",
            "/img/manTGXseries6.png",
            "/img/manTGXseries7.png",
        ],
        models: [
            {
                name: "TGX 18.420",
                description: "Efficient truck for long-haul operations and regional transportation.",
                highCab: true,
                engines: [
                    {
                        name: "D38 Euro 6",
                        fuelEfficiency: 7.5,
                        driverBehavior: "Optimized for fuel economy and consistent performance.",
                        maintenanceCosts: "Moderate, designed for extended service intervals.",
                        horsePower: 420,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "High, designed for long-distance efficiency.",
                        price: 120000,
                        makeAndModel: "MAN TGX 420, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 420,
                            torque: 2100,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-efficient engine for long trips",
                    "Comfortable high-cab design for driver ease",
                    "Advanced safety features for highway use"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGX 18.440",
                description: "Powerful truck designed for heavy loads and long-distance transport.",
                highCab: true,
                engines: [
                    {
                        name: "D38 Euro 6",
                        fuelEfficiency: 7.4,
                        driverBehavior: "Designed for both fuel efficiency and high-performance tasks.",
                        maintenanceCosts: "Moderate, with a focus on durability.",
                        horsePower: 440,
                        pullingPower: "Handles loads up to 42 tons effectively.",
                        reliability: "Very high, suitable for demanding highway tasks.",
                        price: 125000,
                        makeAndModel: "MAN TGX 440, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 440,
                            torque: 2200,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Strong performance for challenging transport tasks",
                    "Aerodynamic design for improved fuel efficiency",
                    "Premium cabin with superior comfort for long drives"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGX 18.460",
                description: "High-performance truck for long-haul and heavy-duty operations.",
                highCab: true,
                engines: [
                    {
                        name: "D38 Euro 6",
                        fuelEfficiency: 7.3,
                        driverBehavior: "Optimized for high performance and fuel economy on long trips.",
                        maintenanceCosts: "Moderate, built for reliability and longevity.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 44 tons effectively.",
                        reliability: "Excellent, engineered for heavy-duty use.",
                        price: 130000,
                        makeAndModel: "MAN TGX 460, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 460,
                            torque: 2300,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Impressive power for long-haul journeys",
                    "Robust and durable engine for heavy-duty use",
                    "Comfortable cabin with advanced driver assistance systems"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGX 18.480",
                description: "Robust truck for long-haul and heavy load transport with enhanced driver comfort.",
                highCab: true,
                engines: [
                    {
                        name: "D38 Euro 6",
                        fuelEfficiency: 7.2,
                        driverBehavior: "Designed for efficiency and power during long-distance operations.",
                        maintenanceCosts: "Moderate, focusing on performance and durability.",
                        horsePower: 480,
                        pullingPower: "Handles loads up to 45 tons effectively.",
                        reliability: "Very high, engineered for demanding logistics tasks.",
                        price: 135000,
                        makeAndModel: "MAN TGX 480, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 480,
                            torque: 2400,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Enhanced performance for heavy and long-distance transport",
                    "Comfortable and ergonomic cabin for extended drives",
                    "Advanced driver assistance systems for added safety"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGX 18.500",
                description: "Top-of-the-line truck for extreme performance and maximum efficiency on the road.",
                highCab: true,
                engines: [
                    {
                        name: "D38 Euro 6",
                        fuelEfficiency: 7.0,
                        driverBehavior: "Optimized for maximum performance and power under heavy load conditions.",
                        maintenanceCosts: "Moderate, with high durability for extreme tasks.",
                        horsePower: 500,
                        pullingPower: "Handles loads up to 50 tons effectively.",
                        reliability: "Outstanding, designed for demanding long-haul applications.",
                        price: 140000,
                        makeAndModel: "MAN TGX 500, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 500,
                            torque: 2500,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Top-tier performance for long-haul and heavy-duty tasks",
                    "Comfortable and luxurious cabin for drivers",
                    "Advanced technology for fleet management and safety"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGX 18.520",
                description: "Exceptional power and performance for heavy-duty transport operations.",
                highCab: true,
                engines: [
                    {
                        name: "D38 Euro 6",
                        fuelEfficiency: 6.9,
                        driverBehavior: "Built for extreme power, ideal for heavy loads and challenging terrains.",
                        maintenanceCosts: "High, optimized for maximum performance.",
                        horsePower: 520,
                        pullingPower: "Handles loads up to 52 tons effectively.",
                        reliability: "Exceptional, engineered for the toughest conditions.",
                        price: 145000,
                        makeAndModel: "MAN TGX 520, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 520,
                            torque: 2600,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Top performance for extreme load capacities",
                    "Luxurious cabin with premium comfort for the driver",
                    "Advanced safety and connectivity features"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGX 18.540",
                description: "Premium truck offering the perfect balance of power and efficiency for demanding tasks.",
                highCab: true,
                engines: [
                    {
                        name: "D38 Euro 6",
                        fuelEfficiency: 6.8,
                        driverBehavior: "Designed for high performance, fuel economy, and long-distance operations.",
                        maintenanceCosts: "Moderate, optimized for long service intervals.",
                        horsePower: 540,
                        pullingPower: "Handles loads up to 54 tons effectively.",
                        reliability: "Outstanding, engineered for demanding commercial use.",
                        price: 150000,
                        makeAndModel: "MAN TGX 540, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 540,
                            torque: 2700,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Superior power for heavy-duty operations",
                    "High-tech driver assistance systems",
                    "Luxury and comfort for long-haul drivers"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGX 18.580",
                description: "Heavy-duty truck designed for extreme performance and fuel economy under heavy loads.",
                highCab: true,
                engines: [
                    {
                        name: "D38 Euro 6",
                        fuelEfficiency: 6.7,
                        driverBehavior: "Built for high performance, efficient under heavy loads.",
                        maintenanceCosts: "High, designed for demanding tasks.",
                        horsePower: 580,
                        pullingPower: "Handles loads up to 58 tons effectively.",
                        reliability: "Exceptional, engineered for long-term reliability in tough conditions.",
                        price: 155000,
                        makeAndModel: "MAN TGX 580, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 580,
                            torque: 2900,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Unmatched pulling power and fuel efficiency",
                    "Comfortable cabin for long-haul drivers",
                    "Advanced connectivity and fleet management systems"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGX 18.640",
                description: "The pinnacle of performance and luxury in heavy-duty trucking.",
                highCab: true,
                engines: [
                    {
                        name: "D38 Euro 6",
                        fuelEfficiency: 6.5,
                        driverBehavior: "Built for maximum power and efficiency during extreme hauling.",
                        maintenanceCosts: "Very high, optimized for top-tier performance.",
                        horsePower: 640,
                        pullingPower: "Handles loads up to 64 tons effectively.",
                        reliability: "Outstanding, designed for the toughest and most demanding applications.",
                        price: 170000,
                        makeAndModel: "MAN TGX 640, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 640,
                            torque: 3200,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Maximum performance for the heaviest loads",
                    "Luxury cabin with the latest driver assistance systems",
                    "Optimized for extreme fuel efficiency"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },
    {
        brand: "Man",
        model: "TGS",
        imgs: [
            "/img/manTGSseries.png",
            "/img/manTGSseries2.png",
            "/img/manTGSseries3.png",
            "/img/manTGSseries4.png",
            "/img/manTGSseries5.png",
            "/img/manTGSseries6.png",
            "/img/manTGSseries7.png",
        ],
        models: [
            {
                name: "TGS 18.320",
                description: "Reliable and versatile truck for regional and long-haul transport.",
                highCab: true,
                engines: [
                    {
                        name: "D26 Euro 6",
                        fuelEfficiency: 7.6,
                        driverBehavior: "Optimized for fuel efficiency and performance on long trips.",
                        maintenanceCosts: "Moderate, designed for extended service intervals.",
                        horsePower: 320,
                        pullingPower: "Handles loads up to 18 tons effectively.",
                        reliability: "High, engineered for consistent performance.",
                        price: 110000,
                        makeAndModel: "MAN TGS 18.320, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 320,
                            torque: 1600,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High fuel efficiency for regional transport",
                    "Comfortable high-cab for driver convenience",
                    "Advanced safety systems for highway and urban driving"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGS 18.360",
                description: "Powerful truck for heavy-duty regional and long-haul operations.",
                highCab: true,
                engines: [
                    {
                        name: "D26 Euro 6",
                        fuelEfficiency: 7.4,
                        driverBehavior: "Balanced between power and fuel efficiency.",
                        maintenanceCosts: "Moderate, designed for reliability in long-distance operations.",
                        horsePower: 360,
                        pullingPower: "Handles loads up to 20 tons effectively.",
                        reliability: "Very high, built for demanding tasks.",
                        price: 115000,
                        makeAndModel: "MAN TGS 18.360, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 360,
                            torque: 1800,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Strong engine for heavy-duty transport",
                    "Spacious cabin with ergonomic design",
                    "Advanced safety and driver assistance systems"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGS 18.400",
                description: "Heavy-duty truck for demanding transport tasks and long-distance operations.",
                highCab: true,
                engines: [
                    {
                        name: "D26 Euro 6",
                        fuelEfficiency: 7.2,
                        driverBehavior: "Optimized for power and fuel economy in extreme conditions.",
                        maintenanceCosts: "Moderate, designed for durability.",
                        horsePower: 400,
                        pullingPower: "Handles loads up to 22 tons effectively.",
                        reliability: "Outstanding, engineered for long-distance transport.",
                        price: 120000,
                        makeAndModel: "MAN TGS 18.400, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 400,
                            torque: 2000,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Enhanced performance for heavy loads",
                    "Comfortable and ergonomic driver cabin",
                    "Comprehensive driver assistance and safety systems"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGS 18.440",
                description: "Powerful truck designed for demanding heavy-duty transport and long distances.",
                highCab: true,
                engines: [
                    {
                        name: "D26 Euro 6",
                        fuelEfficiency: 7.1,
                        driverBehavior: "Designed for extreme performance with fuel efficiency.",
                        maintenanceCosts: "Moderate, with focus on long-term durability.",
                        horsePower: 440,
                        pullingPower: "Handles loads up to 24 tons effectively.",
                        reliability: "Exceptional, designed for extreme hauling conditions.",
                        price: 125000,
                        makeAndModel: "MAN TGS 18.440, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 440,
                            torque: 2200,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Ideal for heavy-duty transport",
                    "Luxurious cabin with premium features",
                    "Advanced connectivity and fleet management"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGS 18.480",
                description: "Robust truck for demanding long-haul and heavy-duty transport.",
                highCab: true,
                engines: [
                    {
                        name: "D26 Euro 6",
                        fuelEfficiency: 7.0,
                        driverBehavior: "Optimized for power, ideal for extreme weight loads.",
                        maintenanceCosts: "Moderate, designed for high performance.",
                        horsePower: 480,
                        pullingPower: "Handles loads up to 25 tons effectively.",
                        reliability: "Outstanding, engineered for the toughest transport tasks.",
                        price: 130000,
                        makeAndModel: "MAN TGS 18.480, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 480,
                            torque: 2400,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful engine for heavy-duty and long-haul transport",
                    "Comfortable and spacious cabin for long trips",
                    "Advanced safety and driver assistance systems"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGS 18.500",
                description: "High-performance truck for long-distance and heavy-duty operations.",
                highCab: true,
                engines: [
                    {
                        name: "D26 Euro 6",
                        fuelEfficiency: 6.9,
                        driverBehavior: "Optimized for high performance and fuel economy.",
                        maintenanceCosts: "Moderate, designed for durability and longevity.",
                        horsePower: 500,
                        pullingPower: "Handles loads up to 26 tons effectively.",
                        reliability: "Exceptional, engineered for demanding use.",
                        price: 135000,
                        makeAndModel: "MAN TGS 18.500, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 500,
                            torque: 2500,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Ideal for heavy long-haul tasks",
                    "Comfortable and high-tech cabin for drivers",
                    "Enhanced fuel efficiency for extended operations"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },    {
        brand: "Man",
        model: "TGM",
        imgs: [
            "/img/manTGMseries.png",
            "/img/manTGMseries2.png",
            "/img/manTGMseries3.png",
            "/img/manTGMseries4.png",
            "/img/manTGMseries5.png",
            "/img/manTGMseries6.png",
            "/img/manTGMseries7.png",
        ],
        models: [
            {
                name: "TGM 18.280",
                description: "Compact yet powerful truck ideal for regional transportation and medium-duty tasks.",
                highCab: true,
                engines: [
                    {
                        name: "D20 Euro 4",
                        fuelEfficiency: 7.8,
                        driverBehavior: "Optimized for balance between power and fuel efficiency.",
                        maintenanceCosts: "Moderate, built for reliability with moderate service intervals.",
                        horsePower: 280,
                        pullingPower: "Handles loads up to 18 tons effectively.",
                        reliability: "High, designed for regional transport.",
                        price: 95000,
                        makeAndModel: "MAN TGM 18.280, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 280,
                            torque: 1400,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 4)"
                        }
                    }
                ],
                features: [
                    "Economical and efficient engine for regional tasks",
                    "Comfortable high-cab for drivers",
                    "Reliable performance for everyday use"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGM 18.340",
                description: "A step up in power for demanding regional and long-distance transportation.",
                highCab: true,
                engines: [
                    {
                        name: "D20 Euro 4",
                        fuelEfficiency: 7.6,
                        driverBehavior: "Optimized for performance and fuel economy, perfect for long-haul transport.",
                        maintenanceCosts: "Moderate, designed for durability and reliability over time.",
                        horsePower: 340,
                        pullingPower: "Handles loads up to 20 tons effectively.",
                        reliability: "Very high, engineered for tough jobs.",
                        price: 105000,
                        makeAndModel: "MAN TGM 18.340, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 340,
                            torque: 1600,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 4)"
                        }
                    }
                ],
                features: [
                    "Stronger engine for longer distances",
                    "Driver-friendly high-cab design",
                    "Enhanced cargo space and weight capacity"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGM 18.400",
                description: "Powerful and versatile, designed for heavy-duty regional and long-haul operations.",
                highCab: true,
                engines: [
                    {
                        name: "D20 Euro 4",
                        fuelEfficiency: 7.4,
                        driverBehavior: "Optimized for higher torque and power, ideal for tough conditions.",
                        maintenanceCosts: "Moderate, with advanced features to reduce downtime.",
                        horsePower: 400,
                        pullingPower: "Handles loads up to 22 tons effectively.",
                        reliability: "Excellent, built for heavy-duty tasks.",
                        price: 110000,
                        makeAndModel: "MAN TGM 18.400, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 400,
                            torque: 2000,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 4)"
                        }
                    }
                ],
                features: [
                    "High horsepower for demanding operations",
                    "Comfortable driver environment for long hauls",
                    "Strong and reliable for challenging transport needs"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGM 18.440",
                description: "Heavy-duty truck designed for extreme tasks and long-haul transportation.",
                highCab: true,
                engines: [
                    {
                        name: "D20 Euro 4",
                        fuelEfficiency: 7.3,
                        driverBehavior: "Engineered for powerful performance over long distances.",
                        maintenanceCosts: "Moderate, designed for high uptime and durability.",
                        horsePower: 440,
                        pullingPower: "Handles loads up to 24 tons effectively.",
                        reliability: "Outstanding, ideal for challenging loads and terrains.",
                        price: 115000,
                        makeAndModel: "MAN TGM 18.440, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 440,
                            torque: 2200,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 4)"
                        }
                    }
                ],
                features: [
                    "High-performance engine for extreme transport tasks",
                    "Spacious and ergonomic cabin",
                    "Designed for extended heavy-duty use"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGM 18.480",
                description: "Ideal for high-load operations and long-distance hauling with superior power and comfort.",
                highCab: true,
                engines: [
                    {
                        name: "D20 Euro 4",
                        fuelEfficiency: 7.2,
                        driverBehavior: "Engineered for maximum power and efficiency in extreme conditions.",
                        maintenanceCosts: "Moderate, with a focus on minimizing downtime.",
                        horsePower: 480,
                        pullingPower: "Handles loads up to 26 tons effectively.",
                        reliability: "Exceptional, designed for the most demanding tasks.",
                        price: 120000,
                        makeAndModel: "MAN TGM 18.480, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 480,
                            torque: 2400,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 4)"
                        }
                    }
                ],
                features: [
                    "Powerful and efficient engine for extreme loads",
                    "Luxurious high-cab with advanced comfort features",
                    "Designed for long-distance heavy-duty transport"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "TGM 18.520",
                description: "Heavy-duty performance with a focus on fuel efficiency and long-distance capabilities.",
                highCab: true,
                engines: [
                    {
                        name: "D20 Euro 4",
                        fuelEfficiency: 7.1,
                        driverBehavior: "Optimized for extreme hauling tasks with high power and fuel efficiency.",
                        maintenanceCosts: "Moderate, designed for minimal downtime and service intervals.",
                        horsePower: 520,
                        pullingPower: "Handles loads up to 28 tons effectively.",
                        reliability: "Top-tier, designed for long-term and heavy-duty use.",
                        price: 125000,
                        makeAndModel: "MAN TGM 18.520, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: 520,
                            torque: 2600,
                            transmission: "MAN TipMatic automated gearbox",
                            fuelType: "Diesel (Euro 4)"
                        }
                    }
                ],
                features: [
                    "High torque for tackling challenging terrains",
                    "Ergonomically designed high-cab for driver comfort",
                    "Advanced safety and connectivity features"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },{
        brand: "Renault",
        model: "T High",
        imgs: [
            "/img/renaultThighseries.png",
            "/img/renaultThighseries2.png",
            "/img/renaultThighseries3.png",
            "/img/renaultThighseries4.png",
            "/img/renaultThighseries5.png",
            "/img/renaultThighseries6.png",
            "/img/renaultThighseries7.png",
        ],
        models: [
            {
                name: "T High 430",
                description: "Versatile and efficient truck designed for long-distance transportation with optimized fuel efficiency.",
                highCab: true,
                engines: [
                    {
                        name: "Dxi 11 Euro 6",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Optimized for fuel efficiency over long-haul distances.",
                        maintenanceCosts: "Moderate, with extended service intervals.",
                        horsePower: 430,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "Excellent, ideal for long-distance transport.",
                        price: "$110,000 - $130,000",
                        makeAndModel: "Renault T High 430, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "430 HP",
                            torque: "2100 Nm",
                            transmission: "Optidriver automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-efficient for long-haul operations",
                    "Spacious, high-comfort cabin",
                    "Designed for regional and long-distance logistics"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "T High 440",
                description: "Well-balanced truck for heavy-duty long-haul transport with a focus on power and efficiency.",
                highCab: true,
                engines: [
                    {
                        name: "Dxi 11 Euro 6",
                        fuelEfficiency: "7.3 km/l",
                        driverBehavior: "Balanced performance, offering both power and fuel efficiency for long-distance travel.",
                        maintenanceCosts: "Moderate, with reliable long-service intervals.",
                        horsePower: 440,
                        pullingPower: "Handles loads up to 44 tons effectively.",
                        reliability: "Very high, engineered for long-distance transport and durability.",
                        price: "$120,000 - $140,000",
                        makeAndModel: "Renault T High 440, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "440 HP",
                            torque: "2200 Nm",
                            transmission: "Optidriver automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High torque for efficient hauling of heavy loads",
                    "Luxury cabin designed for comfort",
                    "Advanced safety systems and driver assistance"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "T High 460",
                description: "High-performance truck combining power, comfort, and fuel efficiency for the most demanding long-haul tasks.",
                highCab: true,
                engines: [
                    {
                        name: "Dxi 13 Euro 6",
                        fuelEfficiency: "7.1 km/l",
                        driverBehavior: "Designed for powerful performance, delivering excellent fuel efficiency over long distances.",
                        maintenanceCosts: "Moderate, optimized for long-term performance.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 45 tons effectively.",
                        reliability: "Outstanding, ideal for tough and long-distance operations.",
                        price: "$130,000 - $150,000",
                        makeAndModel: "Renault T High 460, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2300 Nm",
                            transmission: "Optidriver automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Enhanced engine for high performance in long-haul transport",
                    "Ergonomic cabin for maximum comfort",
                    "Advanced driver assistance systems for safety and ease of use"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "T High 480",
                description: "Powerful truck offering a balance of high performance, efficiency, and comfort for demanding long-distance operations.",
                highCab: true,
                engines: [
                    {
                        name: "Dxi 13 Euro 6",
                        fuelEfficiency: "6.9 km/l",
                        driverBehavior: "Built for excellent power and stability during long-haul trips.",
                        maintenanceCosts: "Moderate, optimized for longevity with minimal downtime.",
                        horsePower: 480,
                        pullingPower: "Handles loads up to 48 tons effectively.",
                        reliability: "Very high, ideal for challenging and heavy-duty operations.",
                        price: "$140,000 - $160,000",
                        makeAndModel: "Renault T High 480, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "480 HP",
                            torque: "2400 Nm",
                            transmission: "Optidriver automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High horsepower for demanding long-distance transport",
                    "Advanced driver comfort and ergonomic cabin",
                    "Cutting-edge safety technologies"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "T High 520",
                description: "Top-tier long-haul truck delivering superior power, performance, and driver comfort for heavy-duty operations.",
                highCab: true,
                engines: [
                    {
                        name: "Dxi 13 Euro 6",
                        fuelEfficiency: "6.7 km/l",
                        driverBehavior: "Optimized for superior power and reliability during extended trips.",
                        maintenanceCosts: "Moderate to high, built for maximum durability and performance.",
                        horsePower: 520,
                        pullingPower: "Handles loads up to 50 tons effectively.",
                        reliability: "Outstanding, designed for heavy-duty, high-performance tasks.",
                        price: "$150,000 - $170,000",
                        makeAndModel: "Renault T High 520, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "520 HP",
                            torque: "2600 Nm",
                            transmission: "Optidriver automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Unmatched pulling power for heavy-duty loads",
                    "Premium comfort and luxury features for long hauls",
                    "Cutting-edge safety and driver assistance systems"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },{
        brand: "Renault",
        model: "C-Series",
        imgs: [
            "/img/renaultCseries.png",
            "/img/renaultCseries2.png",
            "/img/renaultCseries3.png",
            "/img/renaultCseries4.png",
            "/img/renaultCseries5.png",
            "/img/renaultCseries6.png",
            "/img/renaultCseries7.png",
        ],
        models: [
            {
                name: "C 430",
                description: "Versatile truck designed for construction and heavy-duty tasks with a focus on durability and performance.",
                highCab: false,
                engines: [
                    {
                        name: "Dxi 11 Euro 6",
                        fuelEfficiency: "6.5 km/l",
                        driverBehavior: "Optimized for heavy-duty and off-road performance.",
                        maintenanceCosts: "Moderate, designed for demanding environments.",
                        horsePower: 430,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "High, engineered for construction and off-road reliability.",
                        price: "$100,000 - $120,000",
                        makeAndModel: "Renault C Series 430, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "430 HP",
                            torque: "2100 Nm",
                            transmission: "Optidriver automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Heavy-duty chassis designed for tough terrain",
                    "Comfortable interior for off-road tasks",
                    "Excellent towing and payload capacity"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "C 440",
                description: "Heavy-duty truck with improved power and torque for construction and urban logistics.",
                highCab: false,
                engines: [
                    {
                        name: "Dxi 11 Euro 6",
                        fuelEfficiency: "6.3 km/l",
                        driverBehavior: "Designed for robust performance with balanced power and efficiency.",
                        maintenanceCosts: "Moderate, suited for demanding construction environments.",
                        horsePower: 440,
                        pullingPower: "Handles loads up to 44 tons effectively.",
                        reliability: "Very high, with durable components for tough tasks.",
                        price: "$110,000 - $130,000",
                        makeAndModel: "Renault C Series 440, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "440 HP",
                            torque: "2200 Nm",
                            transmission: "Optidriver automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Heavy-duty suspension for urban and construction environments",
                    "Spacious and practical interior for driver comfort",
                    "Advanced safety and stability control systems"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "C 460",
                description: "Powerful and reliable truck for the most demanding construction and logistics applications, with enhanced fuel efficiency.",
                highCab: false,
                engines: [
                    {
                        name: "Dxi 13 Euro 6",
                        fuelEfficiency: "6.0 km/l",
                        driverBehavior: "Built for power, efficiency, and rugged performance in extreme environments.",
                        maintenanceCosts: "Moderate, designed for heavy-duty use with long service intervals.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 45 tons effectively.",
                        reliability: "Outstanding, ideal for construction and demanding logistics tasks.",
                        price: "$120,000 - $140,000",
                        makeAndModel: "Renault C Series 460, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2300 Nm",
                            transmission: "Optidriver automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Exceptional pulling power for construction tasks",
                    "Designed for high payload capacity and tough work environments",
                    "Comfortable cabin for the driver with ample storage space"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },
    {
        brand: "Renault",
        model: "D-Series",
        imgs: [
            "/img/renaultDseries.png",
            "/img/renaultDseries2.png",
            "/img/renaultDseries3.png",
            "/img/renaultDseries4.png",
            "/img/renaultDseries5.png",
            "/img/renaultDseries6.png",
            "/img/renaultDseries7.png",
        ],
        models: [
            {
                name: "D 180",
                description: "Compact and efficient truck ideal for urban logistics and light construction tasks.",
                highCab: false,
                engines: [
                    {
                        name: "Dxi 5 Euro 6",
                        fuelEfficiency: "8.5 km/l",
                        driverBehavior: "Optimized for city driving with excellent fuel economy and maneuverability.",
                        maintenanceCosts: "Low, designed for urban driving and short distances.",
                        horsePower: 180,
                        pullingPower: "Handles loads up to 18 tons effectively.",
                        reliability: "Very high, built for the demanding conditions of urban logistics.",
                        price: "$80,000 - $100,000",
                        makeAndModel: "Renault D Series 180, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-4, Turbocharged Diesel",
                            horsepower: "180 HP",
                            torque: "800 Nm",
                            transmission: "Optitronic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Compact design for urban environments",
                    "Low operational cost with high fuel efficiency",
                    "Easy maneuverability and handling"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "D 210",
                description: "Versatile truck for both urban and regional transport, combining power with efficiency.",
                highCab: false,
                engines: [
                    {
                        name: "Dxi 5 Euro 6",
                        fuelEfficiency: "8.2 km/l",
                        driverBehavior: "Designed for balanced performance, delivering both power and fuel economy.",
                        maintenanceCosts: "Moderate, built to withstand urban and regional driving conditions.",
                        horsePower: 210,
                        pullingPower: "Handles loads up to 21 tons effectively.",
                        reliability: "Very high, built for a variety of transport tasks.",
                        price: "$90,000 - $110,000",
                        makeAndModel: "Renault D Series 210, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-4, Turbocharged Diesel",
                            horsepower: "210 HP",
                            torque: "950 Nm",
                            transmission: "Optitronic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Robust engine for mixed-use operations",
                    "Comfortable cabin for extended drives",
                    "Advanced safety features for driver protection"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "D 250",
                description: "Powerful truck suited for medium-duty transport and light construction tasks, offering excellent reliability.",
                highCab: false,
                engines: [
                    {
                        name: "Dxi 5 Euro 6",
                        fuelEfficiency: "7.8 km/l",
                        driverBehavior: "Designed for optimal performance in both city and regional driving.",
                        maintenanceCosts: "Moderate, with long service intervals.",
                        horsePower: 250,
                        pullingPower: "Handles loads up to 25 tons effectively.",
                        reliability: "Very high, engineered for tough work environments.",
                        price: "$100,000 - $120,000",
                        makeAndModel: "Renault D Series 250, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-5, Turbocharged Diesel",
                            horsepower: "250 HP",
                            torque: "1200 Nm",
                            transmission: "Optitronic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful engine for medium-duty hauling",
                    "Comfortable cabin with modern amenities",
                    "Excellent durability for various applications"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "D 280",
                description: "Heavy-duty truck designed for more demanding regional transport tasks with a strong focus on power and efficiency.",
                highCab: false,
                engines: [
                    {
                        name: "Dxi 5 Euro 6",
                        fuelEfficiency: "7.6 km/l",
                        driverBehavior: "Optimized for regional transport with a balance of power and fuel economy.",
                        maintenanceCosts: "Moderate, long service intervals for reduced downtime.",
                        horsePower: 280,
                        pullingPower: "Handles loads up to 28 tons effectively.",
                        reliability: "Very high, ideal for regional logistics and medium-heavy tasks.",
                        price: "$110,000 - $130,000",
                        makeAndModel: "Renault D Series 280, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "280 HP",
                            torque: "1300 Nm",
                            transmission: "Optitronic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Increased pulling power for heavier loads",
                    "Spacious and ergonomic cabin for regional drivers",
                    "Advanced safety systems for improved driver security"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "D 320",
                description: "High-performance truck for demanding regional and construction tasks, combining power and comfort.",
                highCab: false,
                engines: [
                    {
                        name: "Dxi 6 Euro 6",
                        fuelEfficiency: "7.2 km/l",
                        driverBehavior: "Optimized for regional transport with excellent performance and fuel economy.",
                        maintenanceCosts: "Moderate, designed for durability and extended service life.",
                        horsePower: 320,
                        pullingPower: "Handles loads up to 32 tons effectively.",
                        reliability: "Exceptional, designed for heavy regional and construction tasks.",
                        price: "$120,000 - $140,000",
                        makeAndModel: "Renault D Series 320, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "320 HP",
                            torque: "1500 Nm",
                            transmission: "Optitronic automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High power for demanding regional and construction transport",
                    "Ergonomic and spacious cabin for long shifts",
                    "Advanced safety features for tough driving conditions"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },
    {
        brand: "Ford",
        model: "F-Max",
        imgs: [
            "/img/fordFMAXseries.png",
            "/img/fordFMAXseries2.png",
            "/img/fordFMAXseries3.png",
            "/img/fordFMAXseries4.png",
            "/img/fordFMAXseries5.png",
            "/img/fordFMAXseries6.png",
            "/img/fordFMAXseries7.png",
        ],
        models: [
            {
                name: "F-Max 430",
                description: "Reliable and fuel-efficient truck designed for long-distance transport, combining power and comfort for drivers.",
                highCab: true,
                engines: [
                    {
                        name: "Ecotorq 11.1 Euro 6",
                        fuelEfficiency: "7.8 km/l",
                        driverBehavior: "Optimized for fuel efficiency with a balanced power output for long-haul applications.",
                        maintenanceCosts: "Moderate, with extended service intervals and reliable engineering.",
                        horsePower: 430,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "High, engineered for efficiency and long-distance durability.",
                        price: "$120,000 - $140,000",
                        makeAndModel: "Ford F-Max 430, 2023",
                        engineReleaseYear: 2018,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "430 HP",
                            torque: "2100 Nm",
                            transmission: "ZF 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-efficient engine for long-haul transport",
                    "Spacious cabin with advanced driver comfort features",
                    "Robust design for regional and long-distance logistics"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "F-Max 460",
                description: "Versatile truck designed for maximum performance and reliability, ideal for heavy-duty long-haul transport.",
                highCab: true,
                engines: [
                    {
                        name: "Ecotorq 12.7 Euro 6",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Combines power and fuel efficiency for demanding long-distance and heavy-duty transport tasks.",
                        maintenanceCosts: "Moderate, with durable engineering and extended intervals.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 44 tons effectively.",
                        reliability: "Very high, engineered for demanding operations and high performance.",
                        price: "$130,000 - $150,000",
                        makeAndModel: "Ford F-Max 460, 2023",
                        engineReleaseYear: 2018,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2200 Nm",
                            transmission: "ZF 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High torque for heavy-duty hauling",
                    "Advanced safety and driver assistance systems",
                    "Ergonomically designed cabin for long-haul comfort"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "F-Max 500",
                description: "Premium performance truck designed for top-tier transport tasks, delivering exceptional power, fuel efficiency, and driver comfort.",
                highCab: true,
                engines: [
                    {
                        name: "Ecotorq 13.0 Euro 6",
                        fuelEfficiency: "7.3 km/l",
                        driverBehavior: "Designed for maximum power and fuel economy, optimized for heavy-duty long-distance transport.",
                        maintenanceCosts: "Moderate to high, engineered for long-lasting durability.",
                        horsePower: 500,
                        pullingPower: "Handles loads up to 45 tons effectively.",
                        reliability: "Exceptional, built for long-distance and heavy-duty transport.",
                        price: "$140,000 - $160,000",
                        makeAndModel: "Ford F-Max 500, 2023",
                        engineReleaseYear: 2018,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "500 HP",
                            torque: "2400 Nm",
                            transmission: "ZF 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Premium engine for top-tier performance",
                    "Luxurious and spacious cabin with high driver comfort",
                    "State-of-the-art safety systems for driver protection"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    }, {
        brand: "Ford",
        model: "Cargo Series",
        imgs: [
            "/img/fordCargoseries.png",
            "/img/fordCargoseries2.png",
            "/img/fordCargoseries3.png",
            "/img/fordCargoseries4.png",
        ],
        models: [
            {
                name: "Cargo 2429",
                description: "A versatile truck designed for medium-duty transport, with efficient fuel consumption and reliable performance.",
                highCab: false,
                engines: [
                    {
                        name: "Ecotorq 8.0 Euro 6",
                        fuelEfficiency: "8.0 km/l",
                        driverBehavior: "Optimized for medium-duty operations with good fuel economy and reliable performance.",
                        maintenanceCosts: "Low, with long service intervals for cost-effective operation.",
                        horsePower: 290,
                        pullingPower: "Handles loads up to 20 tons effectively.",
                        reliability: "High, designed for regional and urban logistics.",
                        price: "$75,000 - $90,000",
                        makeAndModel: "Ford Cargo 2429, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "290 HP",
                            torque: "1300 Nm",
                            transmission: "ZF 9-speed manual transmission",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Efficient and reliable engine for medium-duty tasks",
                    "Spacious and ergonomic cabin for driver comfort",
                    "Ideal for regional and urban transport"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Cargo 1831",
                description: "Durable truck designed for heavy-duty regional and city logistics, with a focus on fuel efficiency and comfort.",
                highCab: false,
                engines: [
                    {
                        name: "Ecotorq 8.0 Euro 6",
                        fuelEfficiency: "7.8 km/l",
                        driverBehavior: "Balanced power and efficiency for demanding regional transport tasks.",
                        maintenanceCosts: "Low, with durable systems built for long-term use.",
                        horsePower: 310,
                        pullingPower: "Handles loads up to 22 tons effectively.",
                        reliability: "Very high, engineered for frequent city and regional deliveries.",
                        price: "$80,000 - $100,000",
                        makeAndModel: "Ford Cargo 1831, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "310 HP",
                            torque: "1500 Nm",
                            transmission: "ZF 9-speed manual transmission",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Efficient and powerful engine for city logistics",
                    "Compact and easy-to-maneuver design",
                    "Comfortable and spacious driver cabin"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Cargo 1842",
                description: "Heavy-duty truck designed for long-haul operations with enhanced power and fuel efficiency for demanding tasks.",
                highCab: false,
                engines: [
                    {
                        name: "Ecotorq 10.0 Euro 6",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Optimized for heavy-duty tasks with high pulling power and excellent fuel efficiency.",
                        maintenanceCosts: "Moderate, designed for long-distance and demanding tasks.",
                        horsePower: 420,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "Exceptional, engineered for long-haul transport and reliability.",
                        price: "$100,000 - $130,000",
                        makeAndModel: "Ford Cargo 1842, 2023",
                        engineReleaseYear: 2017,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "420 HP",
                            torque: "2000 Nm",
                            transmission: "ZF 9-speed manual transmission",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Powerful engine for long-distance transport",
                    "Durable and cost-effective design",
                    "Comfortable and spacious cabin for long trips"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },{
        brand: "Iveco",
        model: "S-Way",
        imgs: [
            "/img/ivecoSWAYseries.png",
            "/img/ivecoSWAYseries2.png",
            "/img/ivecoSWAYseries3.png",
            "/img/ivecoSWAYseries4.png",
            "/img/ivecoSWAYseries5.png",
            "/img/ivecoSWAYseries6.png",
            "/img/ivecoSWAYseries7.png",
        ],
        models: [
            {
                name: "Iveco S-Way 430",
                description: "High-performance truck designed for long-haul operations with an emphasis on fuel efficiency and driver comfort.",
                highCab: true,
                engines: [
                    {
                        name: "Tector 7 Euro 6",
                        fuelEfficiency: "7.7 km/l",
                        driverBehavior: "Optimized for long-distance transport, with a focus on fuel economy and reliability.",
                        maintenanceCosts: "Moderate, with reliable service intervals.",
                        horsePower: 430,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "Very high, engineered for long-haul tasks.",
                        price: "$110,000 - $130,000",
                        makeAndModel: "Iveco S-Way 430, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "430 HP",
                            torque: "2000 Nm",
                            transmission: "Hi-Tronix 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Fuel-efficient engine designed for long-haul transport",
                    "Spacious, ergonomic cabin for long-distance driver comfort",
                    "Cutting-edge safety and driver assistance features"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Iveco S-Way 460",
                description: "Advanced truck ideal for high-performance long-haul tasks, with improved fuel efficiency and comfort for drivers.",
                highCab: true,
                engines: [
                    {
                        name: "Tector 7 Euro 6",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Optimized for power and efficiency during long-haul operations.",
                        maintenanceCosts: "Moderate, with long service intervals and dependable performance.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 44 tons effectively.",
                        reliability: "Exceptional, designed for demanding transport needs.",
                        price: "$120,000 - $140,000",
                        makeAndModel: "Iveco S-Way 460, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2200 Nm",
                            transmission: "Hi-Tronix 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High-performance engine for heavy-duty long-haul transport",
                    "Spacious cabin with premium comfort features for drivers",
                    "Advanced safety systems for optimal operation"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Iveco S-Way 500",
                description: "Powerful truck designed for demanding long-distance transportation with outstanding fuel efficiency and driver support systems.",
                highCab: true,
                engines: [
                    {
                        name: "Cursor 11 Euro 6",
                        fuelEfficiency: "7.3 km/l",
                        driverBehavior: "Built for power and fuel economy during high-demand operations, balancing both attributes effectively.",
                        maintenanceCosts: "Moderate, with minimal downtime and long intervals between servicing.",
                        horsePower: 500,
                        pullingPower: "Handles loads up to 45 tons effectively.",
                        reliability: "Excellent, engineered for continuous use on long-haul tasks.",
                        price: "$130,000 - $160,000",
                        makeAndModel: "Iveco S-Way 500, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "500 HP",
                            torque: "2500 Nm",
                            transmission: "Hi-Tronix 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Robust engine ideal for long-haul heavy-duty transport",
                    "Ergonomically designed driver cabin with advanced comfort features",
                    "Superior safety systems and driver assistance"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Iveco S-Way 570",
                description: "Top-of-the-line truck offering maximum performance for the most challenging long-distance operations, with advanced technology and premium comfort.",
                highCab: true,
                engines: [
                    {
                        name: "Cursor 13 Euro 6",
                        fuelEfficiency: "7.0 km/l",
                        driverBehavior: "Optimized for maximum power, stability, and reliability in heavy-duty operations.",
                        maintenanceCosts: "Higher, designed for high-demand tasks and extended service intervals.",
                        horsePower: 570,
                        pullingPower: "Handles loads up to 50 tons effectively.",
                        reliability: "Exceptional, built for heavy-duty and demanding long-haul operations.",
                        price: "$150,000 - $180,000",
                        makeAndModel: "Iveco S-Way 570, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "570 HP",
                            torque: "2800 Nm",
                            transmission: "Hi-Tronix 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Maximum performance engine for heavy-duty long-haul tasks",
                    "Luxurious driver cabin with high-end comfort features",
                    "State-of-the-art safety systems for peak performance"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Iveco S-Way 630",
                description: "The most powerful truck in the series, designed for the toughest operations and longest hauls, with unrivaled power and driver comfort.",
                highCab: true,
                engines: [
                    {
                        name: "Cursor 13 Euro 6",
                        fuelEfficiency: "6.9 km/l",
                        driverBehavior: "Engineered for extreme power and efficiency during demanding transport operations.",
                        maintenanceCosts: "High, for demanding performance with optimal reliability.",
                        horsePower: 630,
                        pullingPower: "Handles loads up to 60 tons effectively.",
                        reliability: "Top-tier, built for the most challenging tasks in long-distance transport.",
                        price: "$170,000 - $200,000",
                        makeAndModel: "Iveco S-Way 630, 2023",
                        engineReleaseYear: 2015,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "630 HP",
                            torque: "3100 Nm",
                            transmission: "Hi-Tronix 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Unmatched power for heavy-duty long-haul transport",
                    "Luxury cabin designed for extended comfort during long trips",
                    "Advanced safety systems and connectivity for fleet management"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },{
        brand: "Iveco",
        model: "X-Way",
        imgs: [
            "/img/ivecoXWAYseries.png",
            "/img/ivecoXWAYseries2.png",
            "/img/ivecoXWAYseries3.png",
            "/img/ivecoXWAYseries4.png",
            "/img/ivecoXWAYseries5.png",
            "/img/ivecoXWAYseries6.png",
            "/img/ivecoXWAYseries7.png",
        ],
        models: [
            {
                name: "X-Way 430",
                description: "Versatile truck for construction and heavy-duty operations with excellent fuel efficiency and durability.",
                highCab: true,
                engines: [
                    {
                        name: "FPT Cursor 9 Euro 6",
                        fuelEfficiency: "8.5 km/l",
                        driverBehavior: "Optimized for construction and heavy-duty tasks, balancing power and fuel efficiency.",
                        maintenanceCosts: "Moderate, with durable components designed for tough work conditions.",
                        horsePower: 430,
                        pullingPower: "Handles loads up to 32 tons effectively.",
                        reliability: "Very high, designed for demanding off-road and on-road conditions.",
                        price: "$120,000 - $140,000",
                        makeAndModel: "Iveco X-Way 430, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "430 HP",
                            torque: "1900 Nm",
                            transmission: "Iveco EuroTronic 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Heavy-duty chassis for construction sites and off-road conditions",
                    "Optimized fuel economy for long hauls and tough terrain",
                    "High driver comfort and advanced safety features"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "X-Way 460",
                description: "Powerful truck engineered for the most demanding off-road and on-road transport tasks, with enhanced comfort and efficiency.",
                highCab: true,
                engines: [
                    {
                        name: "FPT Cursor 11 Euro 6",
                        fuelEfficiency: "8.2 km/l",
                        driverBehavior: "Designed for superior performance in off-road conditions with a focus on efficiency.",
                        maintenanceCosts: "Moderate, with durable and robust components for construction and heavy haulage.",
                        horsePower: 460,
                        pullingPower: "Handles loads up to 36 tons effectively.",
                        reliability: "Very high, built for heavy-duty use and rough terrain operations.",
                        price: "$130,000 - $150,000",
                        makeAndModel: "Iveco X-Way 460, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "460 HP",
                            torque: "2100 Nm",
                            transmission: "Iveco EuroTronic 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Designed for demanding off-road conditions",
                    "Advanced driver assistance systems for improved safety",
                    "Efficient fuel consumption for long trips"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "X-Way 510",
                description: "Heavy-duty truck optimized for high-performance transport in construction and off-road applications.",
                highCab: true,
                engines: [
                    {
                        name: "FPT Cursor 13 Euro 6",
                        fuelEfficiency: "7.8 km/l",
                        driverBehavior: "Engineered for maximum performance with high pulling power and fuel efficiency.",
                        maintenanceCosts: "Moderate, designed for continuous heavy-duty operations.",
                        horsePower: 510,
                        pullingPower: "Handles loads up to 40 tons effectively.",
                        reliability: "Exceptional, engineered for extreme transport demands.",
                        price: "$140,000 - $170,000",
                        makeAndModel: "Iveco X-Way 510, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "510 HP",
                            torque: "2300 Nm",
                            transmission: "Iveco EuroTronic 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Designed for extreme heavy-duty and off-road tasks",
                    "Fuel-efficient with powerful engine for demanding tasks",
                    "High comfort levels with ergonomic cabin and safety features"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "X-Way 560",
                description: "Top-tier truck for the most demanding off-road and construction applications, delivering unmatched power and efficiency.",
                highCab: true,
                engines: [
                    {
                        name: "FPT Cursor 13 Euro 6",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Optimized for maximum efficiency and stability under heavy-duty conditions.",
                        maintenanceCosts: "High, suitable for demanding operations that require consistent power.",
                        horsePower: 560,
                        pullingPower: "Handles loads up to 44 tons effectively.",
                        reliability: "Exceptional, built for long-term, heavy-duty transport.",
                        price: "$160,000 - $200,000",
                        makeAndModel: "Iveco X-Way 560, 2023",
                        engineReleaseYear: 2016,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "560 HP",
                            torque: "2500 Nm",
                            transmission: "Iveco EuroTronic 12-speed automated gearbox",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Maximum pulling power for the toughest conditions",
                    "Advanced technology and safety features for driver comfort",
                    "Built for the toughest terrains with high reliability"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    },{
        brand: "Iveco",
        model: "Eurocargo",
        imgs: [
            "/img/ivecoEurocargoseries.png",
            "/img/ivecoEurocargoseries2.png",
            "/img/ivecoEurocargoseries3.png",
            "/img/ivecoEurocargoseries4.png",
        ],
        models: [
            {
                name: "Eurocargo 120E18",
                description: "Medium-duty truck designed for urban and regional logistics, offering excellent maneuverability and fuel efficiency.",
                highCab: false,
                engines: [
                    {
                        name: "Tector 5 Euro 6",
                        fuelEfficiency: "8.2 km/l",
                        driverBehavior: "Optimized for urban and regional routes with a focus on fuel economy and ease of handling.",
                        maintenanceCosts: "Low, built for durability and extended service intervals.",
                        horsePower: 180,
                        pullingPower: "Handles loads up to 12 tons effectively.",
                        reliability: "High, designed for city logistics and frequent stops.",
                        price: "$50,000 - $65,000",
                        makeAndModel: "Iveco Eurocargo 120E18, 2023",
                        engineReleaseYear: 2013,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-4, Turbocharged Diesel",
                            horsepower: "180 HP",
                            torque: "850 Nm",
                            transmission: "ZF 6-speed manual transmission",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Excellent fuel economy for urban logistics",
                    "Compact design for easy maneuvering",
                    "Durable engine with low maintenance requirements"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Eurocargo 150E22",
                description: "Ideal for regional transport, with increased power and payload capacity, suited for medium-duty tasks.",
                highCab: false,
                engines: [
                    {
                        name: "Tector 7 Euro 6",
                        fuelEfficiency: "7.8 km/l",
                        driverBehavior: "Optimized for regional logistics, providing a balance between fuel economy and pulling power.",
                        maintenanceCosts: "Moderate, with a reputation for reliability and long-term performance.",
                        horsePower: 220,
                        pullingPower: "Handles loads up to 15 tons effectively.",
                        reliability: "Very high, built for frequent use in regional logistics.",
                        price: "$55,000 - $70,000",
                        makeAndModel: "Iveco Eurocargo 150E22, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "220 HP",
                            torque: "950 Nm",
                            transmission: "ZF 6-speed manual transmission",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Enhanced engine power for regional transportation",
                    "Robust construction for heavy-duty use",
                    "Comfortable and ergonomic driver cabin"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Eurocargo 180E28",
                description: "Powerful and versatile truck for heavy-duty regional and urban transport, offering superior pulling power and fuel efficiency.",
                highCab: false,
                engines: [
                    {
                        name: "Tector 7 Euro 6",
                        fuelEfficiency: "7.5 km/l",
                        driverBehavior: "Designed for heavy-duty regional tasks with outstanding pulling power and fuel efficiency.",
                        maintenanceCosts: "Moderate, optimized for high performance over long periods.",
                        horsePower: 280,
                        pullingPower: "Handles loads up to 18 tons effectively.",
                        reliability: "Excellent, built to handle challenging transportation tasks.",
                        price: "$60,000 - $75,000",
                        makeAndModel: "Iveco Eurocargo 180E28, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "280 HP",
                            torque: "1200 Nm",
                            transmission: "ZF 6-speed manual transmission",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "High pulling power for demanding regional logistics",
                    "Reliable engine for long-term performance",
                    "Spacious cabin with high driver comfort"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Eurocargo 220E35",
                description: "Heavy-duty truck designed for transporting large loads over longer distances while maintaining fuel efficiency.",
                highCab: false,
                engines: [
                    {
                        name: "Tector 7 Euro 6",
                        fuelEfficiency: "7.3 km/l",
                        driverBehavior: "Optimized for high-power performance and fuel economy for heavy-duty transport.",
                        maintenanceCosts: "Moderate, designed for long-distance and heavy cargo handling.",
                        horsePower: 350,
                        pullingPower: "Handles loads up to 22 tons effectively.",
                        reliability: "Exceptional, engineered for demanding regional operations.",
                        price: "$65,000 - $85,000",
                        makeAndModel: "Iveco Eurocargo 220E35, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "350 HP",
                            torque: "1400 Nm",
                            transmission: "ZF 6-speed manual transmission",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Increased pulling power for heavier loads",
                    "Built for long-haul regional operations",
                    "Ergonomic and comfortable cabin design"
                ],
                img: "https://via.placeholder.com/200"
            },
            {
                name: "Eurocargo 260E45",
                description: "Top-tier model for the heaviest urban and regional logistics tasks, providing superior fuel economy and performance.",
                highCab: false,
                engines: [
                    {
                        name: "Tector 7 Euro 6",
                        fuelEfficiency: "7.0 km/l",
                        driverBehavior: "Built for challenging regional transport, offering power and fuel efficiency.",
                        maintenanceCosts: "Moderate, designed for demanding usage.",
                        horsePower: 450,
                        pullingPower: "Handles loads up to 26 tons effectively.",
                        reliability: "Outstanding, engineered for the most demanding tasks.",
                        price: "$70,000 - $90,000",
                        makeAndModel: "Iveco Eurocargo 260E45, 2023",
                        engineReleaseYear: 2014,
                        engineEndYear: "Ongoing",
                        technicalSpecs: {
                            engineType: "Inline-6, Turbocharged Diesel",
                            horsepower: "450 HP",
                            torque: "1600 Nm",
                            transmission: "ZF 6-speed manual transmission",
                            fuelType: "Diesel (Euro 6)"
                        }
                    }
                ],
                features: [
                    "Superior pulling power for heavy-duty regional logistics",
                    "Designed for long-term and demanding applications",
                    "Enhanced driver comfort with ergonomic design"
                ],
                img: "https://via.placeholder.com/200"
            }
        ]
    }
    
    
    
    
    
    
    
    
    
]

export default moreTrucks