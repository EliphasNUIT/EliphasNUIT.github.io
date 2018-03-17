/**
 * Armor data
 */
export class ArmorData {
    /**
     * Helm id
     */
    helm: number;
    /**
     * Shoulders id
     */
    shoulders: number;
    /**
     * Coat id
     */
    coat: number;
    /**
     * Gloves id
     */
    gloves: number;
    /**
     * Leggings id
     */
    leggings: number;
    /**
     * Boots id
     */
    boots: number;

    /**
     * Create an armor data
     * @param helm Helm id
     * @param shoulders Shoulders id
     * @param coat Coat id
     * @param gloves Gloves id
     * @param leggings Leggings id
     * @param boots Boots id
     */
    constructor(helm: number, shoulders: number, coat: number, gloves: number, leggings: number, boots: number) {
        this.helm = helm;
        this.shoulders = shoulders;
        this.coat = coat;
        this.gloves = gloves;
        this.leggings = leggings;
        this.boots = boots;
    }
}

/**
 * Trinket data
 */
export class TrinketData {
    /**
     * Ring 1 id
     */
    ring1: number;
    /**
     * Ring 2 id
     */
    ring2: number;
    /**
     * Amulet id
     */
    amulet: number;
    /**
     * Earring 1 id
     */
    earring1: number;
    /**
     * Earring 2 id
     */
    earring2: number;
    /**
     * Back id
     */
    back: number;

    /**
     * Create an armor data
     * @param ring1 Ring 1 id
     * @param ring2 Ring 2 id
     * @param amulet Amulet id
     * @param earring1 Earring 1 id
     * @param earring2 Earring 2 id
     * @param back Back id
     */
    constructor(ring1: number, ring2: number, amulet: number, earring1: number, earring2: number, back: number) {
        this.ring1 = ring1;
        this.ring2 = ring2;
        this.amulet = amulet;
        this.earring1 = earring1;
        this.earring2 = earring2;
        this.back = back;
    }
}

/**
 * Equipement data
 */
export const items = {
    trinket: new TrinketData(
        79712,
        81024,
        81658,
        79745,
        79444,
        79830
    ),
    armor: {
        Light: new ArmorData(
            80751,
            80855,
            80811,
            80838,
            80755,
            80815
        ),
        Medium: new ArmorData(
            80753,
            80825,
            80798,
            80779,
            80812,
            80836
        ),
        Heavy: new ArmorData(
            80832,
            80814,
            80818,
            80834,
            80845,
            80808
        )
    },

    runes: {
        'Superior Rune of Leadership': 70600,
        'Superior Rune of the Scholar': 24836,
        'Superior Rune of the Berserker': 71425,
        'Superior Rune of the Aristocracy': 24845,
        'Superior Rune of the Monk': 24842,
        'Superior Rune of Balthazar': 24765,
        'Superior Rune of the Nightmare': 24848,
        'Superior Rune of the Trapper': 67339,
        'Superior Rune of the Krait': 24762,
        'Superior Rune of Water': 24839,
        'Superior Rune of the Renegade': 83502,
        'Superior Rune of the Firebrand': 83338,
        'Superior Rune of Durability': 72361,
        'Superior Rune of the Traveler': 24691
    },

    sigils: {
        'Superior Sigil of Concentration': 72339,
        'Superior Sigil of Force': 24615,
        'Superior Sigil of Accuracy': 24618,
        'Superior Sigil of Malice': 44950,
        'Superior Sigil of Geomancy': 24605,
        'Superior Sigil of Air': 24554,
        'Superior Sigil of Transference': 74326,
        'Superior Sigil of Water': 24551,
        'Superior Sigil of Smoldering': 24624,
        'Superior Sigil of Bursting': 44944,
        'Superior Sigil of Earth': 24560,
        'Superior Sigil of Impact': 24868,
        'Superior Sigil of Agility': 72092,
        'Superior Sigil of Agony': 24612,
        'Superior Sigil of Energy': 24607,
        'Major Sigil of Bursting': 44943,
        'Superior Sigil of Paralyzation': 24639
    },

    weapons: {
        Axe: 81321,
        Dagger: 81451,
        Mace: 81514,
        Pistol: 81270,
        Scepter: 81400,
        Sword: 81376,
        Focus: 81503,
        Shield: 81339,
        Torch: 81327,
        Warhorn: 81337,
        Greatsword: 81309,
        Hammer: 81374,
        Longbow: 81289,
        Rifle: 81528,
        Shortbow: 81329,
        Staff: 81382
    },

    consumable: {
        'Rare Veggie Pizza': 12464,
        'Toxic Focusing Crystal': 48917,
        'Furious Tuning Crystal': 67524,
        'Bowl of Sweet and Spicy Butternut Squash Soup': 41569,
        'Superior Sharpening Stone': 9443,
        'Delicious Rice Ball': 68634,
        'Bountiful Maintenance Oil': 67528,
        'Fried Golden Dumpling': 68633,
        'Bowl of Nopalitos Sauté': 66530,
        'Magnanimous Maintenance Oil': 81157,
        'Prickly Pear Pie': 66538,
        'Bowl of Fire Meat Chili': 12484,
        'Bowl of Orrian Truffle and Meat Stew': 12488,
        'Toxic Maintenance Oil': 48916,
        'Bowl of Refugee\'s Beet Soup': 41562,
        'Bowl of Curry Butternut Squash Soup': 12486
    }
};

Object.freeze(items);
