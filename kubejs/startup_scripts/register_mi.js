//priority: 499

MIMachineEvents.registerCasings(event => {
    event.register('compactium_casing');
    event.register('manasteel_casing');
    event.register('unobtanium_casing');
    event.register('space_casing');
    event.register('adamantite_casing');
    event.register('bedrock_storage_block');
    event.register('wither_proof_glass');
    event.register('chiseled_basalt');
    event.register('nuclear_pipe');
    event.register('wax');
    event.register('planks_dark');
    event.register('blastproof_casing');
    event.register('hsla_steel_machine_casing_pipe');
    event.register('turbinium_casing');
    event.register('sheet_metal_block');
});

MIMachineEvents.registerUpgrades(event => {
    event.register('spectrum:upgrade_speed', 32);
    event.register('spectrum:upgrade_speed2', 128);
    event.register('spectrum:upgrade_speed3', 512);
});

MIRegistrationEvents.registerFluidFuels(event => {
    event.register("modern_industrialization:morkite_fuel", 3200);
    event.register('neepmeat:ethereal_fuel', 600);
    event.register("modern_industrialization:methane", 120);
});

MIRegistrationEvents.registerFluids(event => {
    event.register("Hydrazine", "hydrazine", 0x40362f, "water", false, "low");
    event.register("Wood Gas", "wood_gas", 0x997300, "water", true, "medium");
    event.register("Advanced Rocket Fuel", "advanced_rocket_fuel", 0x40362f, "water", false, "high");
    event.register("Ammonia Gas", "ammonia_gas", 0xE6E6FA, "steam", true, "medium");
    event.register("Hydrogen Peroxide", "hydrogen_peroxide", 0x66CCCC, "water", false, "low");
    event.register("Isopropyl Alcohol", "isopropyl_alcohol", 0xC0D6E9, "water", false, "low");
    event.register("Acetone", "acetone", 0xC0D6E9, "water", false, "low");
    event.register("Liquefied Mana", "liquid_mana", 0x00FFCB, "water", false, "high");
    event.register("Mars Liquid Air", "mars_air", 0xC0D6CB, "water", false, "low");
    event.register("Mercury Liquid Air", "mercury_air", 0xC0D6A0, "water", false, "low");
    event.register("Venus Liquid Air", "venus_air", 0xC0D671, "water", false, "low");
    event.register("Glacio Liquid Air", "glacio_air", 0xC0D6FF, "water", false, "low");
    event.register("Nether Liquid Air", "nether_air", 0xC0D658, "water", false, "low");
    event.register("Ender Liquid Air", "ender_air", 0x032620, "water", false, "low");
    event.register("Bee Air", "bee_air", 0xC0B141, "steam", false, "low");
    event.register("Morkite Fuel", "morkite_fuel", 0x00FFF3, "steam", false, "low");
    event.register("Fluorine Gas", "fluorine_gas", 0xE0E29E, "steam", true, "high");
    // event.register("Glowdamp", "glowdamp", 0xFFAc1c, "steam", true, "high");
    event.register("Silicon Tetrafluoride Gas", "silicon_tetrafluoride_gas", 0xF5F6E1, "steam", true, "low");
    event.register("Carbon Monoxide Gas", "carbon_monoxide_gas", 0xF5F6F6, "steam", true, "low");
    event.register("Void", "void", 0x000000, "plasma", false, "high");
    event.register("Purified Void", "purified_void", 0xF5F6F6, "plasma", false, "medium");
    event.register("Naquadah Sulfuric Solution", "naquadah_sulfuric_solution", 0x9B6028, "water", false, "medium");
    event.register("Purified Naquadah Sulfuric Solution", "purified_naquadah_sulfuric_solution", 0xe6a76e, "water", false, "medium");
    event.register("Mutagen", "mutagen", 0xC0D6CB, "lava", false, "low");

    global.dyeColors.forEach(color => {
        event.register(`${defineItemName(color.name)} Ink`, `${color.name}_ink`, color.code, "plasma", false, "low");
    });
});

MIMaterialEvents.addMaterials(event => {
    event.createMaterial("Caterium", 'caterium', 0xc19e2b, builder => {
        builder
            .materialSet('shiny')
            .hardness('soft')
            .addParts('dust','rod','plate','wire','fine_wire')
            .addExternalPart('raw_metal', 'kubejs:raw_caterium')
            .addExternalPart('ingot', 'kubejs:refined_caterium')
            .ore({
                "generate": false,
                "ore_set": "lapis",
            })
            .cable('ev')
            .defaultRecipes()
    })

    event.createMaterial("Turbinium", 'turbinium', 0x00A675, builder => {
        builder
            .materialSet('metallic')
            .hardness('hard')
            .addParts('dust','plate','curved_plate','large_plate')
            .addExternalPart('raw_metal', 'kubejs:raw_turbinium')
            .addExternalPart('ingot', 'kubejs:refined_turbinium')
            .ore({
                "generate": false,
                "ore_set": "copper",
            })
            .specialCasing("Turbinium Casing", "turbinium_casing", 16.0)
            .pipeCasing(12.0)
            .defaultRecipes()
    })

    event.createMaterial("Naquadah", 'naquadah', 0x032D27, builder => {
        builder
            .materialSet('shiny')
            .addParts('dust','rod','tiny_dust')
            .addExternalPart('raw_metal', 'kubejs:raw_naquadah')
            .addExternalPart('ingot', 'kubejs:refined_naquadah')
            .ore({
                "generate": false,
                "ore_set": "coal",
            })
            .nuclearFuel(
                0.8,     // Thermal absorption probabilty
                0.6,    // Thermal scattering
                4200,    // Max temperature
                1200,     // Low temperature limit (neutron production starts to decrease)
                3300,    // High temperature limit (neutron production completely stops)
                16,       // Neutron multiplication
                4     // Direct energy factor
            )
            .fuelRods()
            .defaultRecipes()
    })

    event.createMaterial("Octiron", 'octiron', 0x323232, builder => {
        builder
            .materialSet('shiny')
            .addParts('dust')
            .addExternalPart('raw_metal', 'kubejs:octiron_shards')
            .ore({
                "generate": false,
                "ore_set": "diamond",
            })
    })

    event.createMaterial("Brookite", 'brookite', 0x7c3201, builder => {
        builder
            .materialSet('shiny')
            .addParts('dust')
            .ore({
                "generate": false,
                "ore_set": "lapis",
            })
            .rawMetal("copper")
            .defaultRecipes()
    })

    event.createMaterial("Gadolinite", 'gadolinite', 0x1e827e, builder => {
        builder
            .materialSet('metallic')
            .addParts('dust')
            .ore({
                "generate": false,
                "ore_set": "lapis",
            })
            .rawMetal("copper")
            .defaultRecipes()
    })

    global.dyeColors.forEach(color => {
        event.createMaterial(defineItemName(color.name), color.name, color.code, builder => {
            builder
                .customRegularPart('Honeycomb', 'comb')
        });
    });

    event.createMaterial("Lithium", "lithium", 0xb98279, builder => {
        builder
            .addParts('dust','tiny_dust')
            .defaultRecipes();
    });

    event.createMaterial("Tantalum", "tantalum", 0xa5a5a5, builder => {
        builder
            .addParts('dust','tiny_dust')
            .defaultRecipes();
    });

    event.createMaterial("Niobium", "niobium", 0x541d2e, builder => {
        builder
            .addParts('dust','tiny_dust')
            .defaultRecipes();
    });

    event.createMaterial("Gleaming", "gleaming", 0xd40831, builder => {
        builder
            .addParts('crushed_dust')
            .addExternalPart('dust', 'things:gleaming_powder')
            .addExternalPart('ore', 'things:gleaming_ore')
            .defaultRecipes();
    });

    event.createMaterial("Rocket Alloy", "rocket_alloy", 0x47280E, builder => {
        builder
            .addParts("ingot", "nugget", "dust", "tiny_dust", "plate", "large_plate", 'curved_plate')
            .defaultRecipes();
    });

    event.createMaterial("Meat Steel", "meat_steel", 0x88624f, builder => {
        builder
            .addParts("dust",'rod','ring', "large_plate", 'plate', 'curved_plate')
            .hardness("average")
            //.materialSet('shiny')
            .addExternalPart('ingot', 'neepmeat:meat_steel_ingot')
            .addExternalPart('block', 'neepmeat:meat_steel_block')
            .defaultRecipes();
    });

    event.createMaterial("Desh", "desh", 0XDE661B, builder => {
        builder
            .addParts("dust", "tiny_dust", "rod", "gear", "ring", "bolt", "large_plate", 'curved_plate', 'drill', 'drill_head', 'hot_ingot')
            .addExternalPart('plate', 'ad_astra:desh_plate', '#c:desh_plates')
            .addExternalPart('ingot', 'ad_astra:desh_ingot', '#c:desh_ingots')
            .addExternalPart('nugget', 'ad_astra:desh_nugget', '#c:desh_nuggets')
            .defaultRecipes();
    });

    event.createMaterial("Calorite", "calorite", 0xD10412, builder => {
        builder
            .addParts("dust", "tiny_dust", "large_plate", 'drill', 'drill_head', 'curved_plate', 'gear', 'ring', 'rod', 'bolt', 'hot_ingot')
            .addExternalPart('plate', 'ad_astra:calorite_plate', '#c:calorite_plates')
            .addExternalPart('ingot', 'ad_astra:calorite_ingot', '#c:calorite_ingots')
            .addExternalPart('nugget', 'ad_astra:calorite_nugget', '#c:calorite_nuggets')
            .defaultRecipes();
    });

    event.createMaterial("Ostrum", "ostrum", 0xA35F78, builder => {
        builder
            .addParts("dust", "tiny_dust", "large_plate", 'curved_plate', 'drill', 'drill_head', 'gear', 'ring', 'rod', 'bolt', 'hot_ingot')
            .addExternalPart('plate', 'ad_astra:ostrum_plate', '#c:ostrum_plates')
            .addExternalPart('ingot', 'ad_astra:ostrum_ingot', '#c:ostrum_ingots')
            .addExternalPart('nugget', 'ad_astra:ostrum_nugget', '#c:ostrum_nuggets')
            .defaultRecipes();
    });

    event.createMaterial("Netherite", "netherite", 0x40362F, builder => {
        builder
            .addParts("nugget", "plate", "large_plate", 'curved_plate')
            .addExternalPart('ingot', 'minecraft:netherite_ingot', '#c:netherite_ingots')
            .defaultRecipes();
    });

    event.createMaterial("Compactium", "compactium", 0x003D34, builder => {
        builder
            .addParts('ingot', "nugget", "plate",'curved_plate', "large_plate", 'dust', 'tiny_dust', 'gear', 'bolt', 'ring', 'rod')
            .battery(120000000)
            .defaultRecipes()
            .specialCasing("Compact Casing", "compactium_casing", 16.0);
    });

    event.createMaterial("Unobtanium", "unobtanium", 0x953595, builder => {
        builder
            .materialSet('shiny')
            .addParts("nugget", "plate", "large_plate", 'dust', 'tiny_dust', 'coil', 'gear', 'bolt', 'ring', 'rod', 'hot_ingot', 'wire')
            .addExternalPart('ingot', 'architects_palette:unobtanium')
            .specialCasing('Unobtanium Casing', 'unobtanium_casing', 12.0)
            .cable('ev')
            .defaultRecipes();
    });

    event.createMaterial("Quartz Blend", 'quartz_blend', 0xCFBD8F, builder => {
        builder
            .addParts('dust')
            .block('redstone');
    });

    event.createMaterial("Certus Quartz", 'certus_quartz', 0xbbdcf9, builder => {
        builder
            .addParts('tiny_dust')
            .addExternalPart('dust', 'ae2:certus_quartz_dust')
            .customRegularPart('Lens', 'lens')
            .defaultRecipes()
    })

    event.createMaterial("HSLA Steel", "hsla_steel", 0xCED2D7, builder => {
        builder
            .hardness("hard")
            .materialSet('shiny')
            .addParts("ingot","hot_ingot", "dust", "plate",'curved_plate', "large_plate",'bolt','gear', 'ring', 'rod', 'wire')
            .specialCasing('Space Casing', 'space_casing', 12.0)
            .pipeCasing(12.0)
            .defaultRecipes();
    });

    event.createMaterial("Vanadium", "vanadium", 0x6A6A67, builder => {
        builder
            .hardness("hard")
            .addParts("ingot", "dust", "plate")
            .defaultRecipes();
    });

    event.createMaterial("Molybdenum", "molybdenum", 0x8e8c83, builder => {
        builder
            .hardness("hard")
            .addParts("ingot", "dust")
            .defaultRecipes();
    });

    event.createMaterial("Indium", "indium", 0xE0E2DE, builder => {
        builder
            .hardness("soft")
            .addParts("ingot", "dust", "plate", 'nugget')
            .defaultRecipes();
    });


    event.createMaterial("Roquesite", "roquesite", 0x76766c, builder => {
        builder
            .addParts("dust")
            .ore({
                "generate": false,
                "ore_set": "lapis",
            })
            .rawMetal("copper")
            .defaultRecipes();
    });

    event.createMaterial("Fluoroapatite", "fluoroapatite", 0xE0E29E, builder => {
        builder
            .addParts("dust")
            .ore({
                "generate": false,
                "ore_set": "lapis",
            })
            .rawMetal("copper")
            .defaultRecipes();
    });

    event.createMaterial("Vanadinite", "vanadinite", 0x531a0e, builder => {
        builder
            .addParts("dust")
            .materialSet('shiny')
            .ore({
                "generate": false,
                "ore_set": "gold",
            })
            .rawMetal("iron")
            .defaultRecipes();
    });

    event.createMaterial("Molybdenite", "molybdenite", 0x3d4050, builder => {
        builder
            .addParts("dust")
            .materialSet('shiny')
            .ore({
                "generate": false,
                "ore_set": "iron",
            })
            .rawMetal("copper")
            .defaultRecipes();
    });

    event.createMaterial("Tungsten Steel", "tungsten_steel", 0x677680, builder => {
        builder
            .addParts("ingot", "dust", "coil", "wire", 'hot_ingot', 'plate')
            .cable('hv')
            .defaultRecipes();
    });

    event.createMaterial("White Phosphorus", "phosphorus", 0x729f81, builder => {
        builder
            .addParts("dust","tiny_dust")
            .defaultRecipes();
    });
    event.createMaterial("Indium Phosphide", "indium_phosphide", 0x272b2e, builder => {
        builder
            .addParts("dust","tiny_dust","plate","ingot",'rod','large_plate')
            .defaultRecipes();
    });
    event.createMaterial("Calcium", "calcium", 0xf2f4e8, builder => {
        builder
            .addParts("dust","tiny_dust")
            .defaultRecipes();
    });
    event.createMaterial("Calcium Metasilicate", "calcium_metasilicate", 0xD9DBD0, builder => {
        builder
            .addParts("dust","tiny_dust")
            .defaultRecipes();
    });

    // SPECTRUM MATERIALS
    let SpectrumStoneMaterials = (name, hexColor, material, parts, externalDust, externalIngot) => {
        event.createMaterial(capitalize(name), name, hexColor, builder => {
            builder
                .materialSet(material)
                .addParts(parts)
                .addExternalPart('dust', externalDust)
                .addExternalPart('ingot', externalIngot)
                .forgeHammerRecipes()
                .defaultRecipes();
        });
    };

    SpectrumStoneMaterials('calcite', 0xf5f2f2, 'stone', ['plate', 'large_plate', 'tiny_dust', 'ring', 'rod'], 'kubejs:calcite_dust', 'kubejs:calcite_brick');
    SpectrumStoneMaterials('basalt', 0x3c3c3c, 'stone', ['plate', 'large_plate', 'tiny_dust', 'ring', 'rod'], 'kubejs:basalt_dust', 'kubejs:basalt_brick');

    let SpectrumGemMaterials = (name, hexColor, material, parts, externalIngot) => {
        event.createMaterial(capitalize(name), name, hexColor, builder => {
            builder
                .materialSet(material)
                .addParts(parts)
                .addExternalPart('ingot', externalIngot)
                .forgeHammerRecipes()
                .defaultRecipes();
        });
    };

    SpectrumGemMaterials('citrine', 0xe0b11f, 'shiny', ['plate', 'large_plate', 'nugget'], 'spectrum:citrine_shard')
    SpectrumGemMaterials('topaz', 0x44a4fc, 'shiny', ['plate', 'large_plate', 'nugget'], 'spectrum:topaz_shard')
    SpectrumGemMaterials('amethyst', 0x8c6ccc, 'shiny', ['plate', 'large_plate', 'nugget'], 'minecraft:amethyst_shard')
    SpectrumGemMaterials('onyx', 0x142a5a, 'shiny', ['plate', 'large_plate', 'nugget'], 'spectrum:onyx_shard')
    SpectrumGemMaterials('moonstone', 0x747cac, 'shiny', ['plate', 'large_plate', 'nugget'], 'spectrum:moonstone_shard')
    SpectrumGemMaterials('malachite', 0x08d990, 'shiny', ['plate','curved_plate', 'large_plate', 'nugget'], 'spectrum:refined_malachite')
    SpectrumGemMaterials('azurite', 0x284bcc, 'shiny', ['plate','rod','curved_plate', 'large_plate', 'nugget'], 'spectrum:refined_azurite')
})
