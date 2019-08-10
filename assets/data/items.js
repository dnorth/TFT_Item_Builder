const items = {
    baseItems: [
        {
            name: 'B.F. Sword',
            icon: require('../items/1_bf_sword.png'),
            id: 1
        },
        {
            name: 'Needlessly Large Rod',
            icon: require('../items/2_needlessly_large_rod.png'),
            id: 2
        },
        {
            name: 'Recurve Bow',
            icon: require('../items/3_recurve_bow.png'),
            id: 3
        },
        {
            name: 'Tear of the Goddess',
            icon: require('../items/4_tear_of_the_goddess.png'),
            id: 4
        },
        {
            name: 'Chain Vest',
            icon: require('../items/5_chain_vest.png'),
            id: 5
        },
        {
            name: 'Negatron Cloak',
            icon: require('../items/6_negatron_cloak.png'),
            id: 6
        },
        {
            name: "Giant's Belt",
            icon: require('../items/7_giants_belt.png'),
            id: 7
        },
        {
            name: 'Spatula',
            icon: require('../items/8_spatula.png'),
            id: 8
        }
    ],
    combinedItems: [
        {
            name: 'Infinity Edge',
            icon: require('../items/11_infinity_edge.png'),
            recipe: [1, 1],
            id: 11
        },
        {
            name: 'Hextech Gunblade',
            icon: require('../items/12_hextech_gunblade.png'),
            recipe: [1, 2],
            id: 12
        },
        {
            name: 'Sword of the Divine',
            icon: require('../items/13_sword_of_the_divine.png'),
            recipe: [1, 3],
            id: 13
        },
        {
            name: 'Spear of Shojin',
            icon: require('../items/14_spear_of_shojin.png'),
            recipe: [1, 4],
            id: 14
        },
        {
            name: 'Guardian Angel',
            icon: require('../items/15_guardian_angel.png'),
            recipe: [1, 5],
            id: 15
        },
        {
            name: 'Bloodthirster',
            icon: require('../items/16_bloodthirster.png'),
            recipe: [1, 6],
            id: 16
        },
        {
            name: "Zeke's Herald",
            icon: require('../items/17_zekes_herald.png'),
            recipe: [1, 7],
            id: 17
        },
        {
            name: "Youmuu's Ghostblade",
            icon: require('../items/18_youmuus_ghostblade.png'),
            recipe: [1, 8],
            id: 18
        },
        {
            name: "Rabadon's Deathcap",
            icon: require('../items/22_rabadons_deathcap.png'),
            recipe: [2, 2],
            id: 22
        },
        {
            name: "Guinsoo's Rageblade",
            icon: require('../items/23_guinsoos_rageblade.png'),
            recipe: [2, 3],
            id: 23
        },
        {
            name: "Luden's Echo",
            icon: require('../items/24_ludens_echo.png'),
            recipe: [2, 4],
            id: 24
        },
        {
            name: "Locket of the Iron Solari",
            icon: require('../items/25_locket_of_the_iron_solari.png'),
            recipe: [2, 5],
            id: 25
        },
        {
            name: "Ionic Spark",
            icon: require('../items/26_ionic_spark.png'),
            recipe: [2, 6],
            id: 26
        },
        {
            name: "Morellonomicon",
            icon: require('../items/27_morellonomicon.png'),
            recipe: [2, 7],
            id: 27
        },
        {
            name: "Yuumi",
            icon: require('../items/28_yuumi.png'),
            recipe: [2, 8],
            id: 28
        },
        {
            name: "Rapid Firecannon",
            icon: require('../items/33_rapid_firecannon.png'),
            recipe: [3, 3],
            id: 33
        },
        {
            name: "Statikk Shiv",
            icon: require('../items/34_statikk_shiv.png'),
            recipe: [3, 4],
            id: 34
        },
        {
            name: "Phantom Dancers",
            icon: require('../items/35_phantom_dancers.png'),
            recipe: [3, 5],
            id: 35
        },
        {
            name: "Cursed Blade",
            icon: require('../items/36_cursed_blade.png'),
            recipe: [3, 6],
            id: 36
        },
        {
            name: "Titanic Hydra",
            icon: require('../items/37_titanic_hydra.png'),
            recipe: [3, 7],
            id: 37
        },
        {
            name: "Blade of the Ruined King",
            icon: require('../items/38_blade_of_the_ruined_king.png'),
            recipe: [3, 8],
            id: 38
        },
        {
            name: "Seraph's Embrace",
            icon: require('../items/44_seraphs_embrace.png'),
            recipe: [4, 4],
            id: 38
        },
        {
            name: "Frozen Heart",
            icon: require('../items/45_frozen_heart.png'),
            recipe: [4, 5],
            id: 45
        },
        {
            name: "Hush",
            icon: require('../items/46_hush.png'),
            recipe: [4, 6],
            id: 46
        },
        {
            name: "Redemption",
            icon: require('../items/47_redemption.png'),
            recipe: [4, 7],
            id: 47
        },
        {
            name: "Darkin",
            icon: require('../items/48_darkin.png'),
            recipe: [4, 8],
            id: 48
        },
        {
            name: "Thornmail",
            icon: require('../items/55_thornmail.png'),
            recipe: [5, 5],
            id: 55
        },
        {
            name: "Swordbreaker",
            icon: require('../items/56_swordbreaker.png'),
            recipe: [5, 6],
            id: 56
        },
        {
            name: "Red Buff",
            icon: require('../items/57_red_buff.png'),
            recipe: [5, 7],
            id: 57
        },
        {
            name: "Knight's Vow",
            icon: require('../items/58_knights_vow.png'),
            recipe: [5, 8],
            id: 58
        },
        {
            name: "Dragon's Claw",
            icon: require('../items/66_dragons_claw.png'),
            recipe: [6, 6],
            id: 66
        },
        {
            name: "Zephyr",
            icon: require('../items/67_zephyr.png'),
            recipe: [6, 7],
            id: 67
        },
        {
            name: "Runaan's Hurricane",
            icon: require('../items/68_runaans_hurricane.png'),
            recipe: [6, 8],
            id: 68
        },
        {
            name: "Warmogs Armor",
            icon: require('../items/77_warmogs.png'),
            recipe: [7, 7],
            id: 77
        },
        {
            name: "Frozen Mallet",
            icon: require('../items/78_frozen_mallet.png'),
            recipe: [7, 8],
            id: 58
        },
        {
            name: "Force of Nature",
            icon: require('../items/88_force_of_nature.png'),
            recipe: [8, 8],
            id: 58
        },
    ]
}

export default items