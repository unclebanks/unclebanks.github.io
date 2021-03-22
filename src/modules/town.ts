import { $ } from './utilities';

type Player = any;
type Poke = any;
type DOM = any;

interface ShopItemBase {
    name: string,
}

interface ShopItemBall extends ShopItemBase {
    ball: string,
}

interface ShopItemBattleItem extends ShopItemBase {
    battleItem: string,
}

interface ShopItemUnlockable extends ShopItemBase {
    unlockable: string,
}

interface ShopItemMegaStone extends ShopItemBase {
    megaStones: string,
}

type ShopItem = ShopItemBall | ShopItemBattleItem | ShopItemUnlockable | ShopItemMegaStone;

interface PokecoinShopItemBase {
    pokecoins: number,
}

interface BattlecoinShopItemBase {
    battlecoins: number,
}

interface CatchcoinShopItemBase {
    catchcoins: number,
}

type PokecoinShopItem = PokecoinShopItemBase & ShopItem;

type PokecoinShop = PokecoinShopItem[];

type BattlecoinShopItem = BattlecoinShopItemBase & ShopItem;

type BattlecoinShop = BattlecoinShopItem[];

type CatchcoinShopItem = CatchcoinShopItemBase & ShopItem;

type CatchcoinShop = CatchcoinShopItem[];

class Town {
    player: Player;

    Poke: Poke;

    dom: DOM;

    pokecoinShopItems: PokecoinShop;

    johtoPokecoinShopItems: PokecoinShop;

    hoennPokecoinShopItems: PokecoinShop;

    sinnohPokecoinShopItems: PokecoinShop;

    unovaPokecoinShopItems: PokecoinShop;

    kalosPokecoinShopItems: PokecoinShop;

    alolaPokecoinShopItems: PokecoinShop;

    galarPokecoinShopItems?: PokecoinShop;

    battlecoinShopItems: BattlecoinShop;

    johtoBattlecoinShopItems: BattlecoinShop;

    hoennBattlecoinShopItems: BattlecoinShop;

    sinnohBattlecoinShopItems: BattlecoinShop;

    unovaBattlecoinShopItems: BattlecoinShop;

    kalosBattlecoinShopItems: BattlecoinShop;

    alolaBattlecoinShopItems: BattlecoinShop;

    galarBattlecoinShopItems?: BattlecoinShop;

    catchcoinShopItems: CatchcoinShop;

    johtoCatchcoinShopItems: CatchcoinShop;

    hoennCatchcoinShopItems: CatchcoinShop;

    sinnohCatchcoinShopItems: CatchcoinShop;

    unovaCatchcoinShopItems: CatchcoinShop;

    kalosCatchcoinShopItems: CatchcoinShop;

    alolaCatchcoinShopItems: CatchcoinShop;

    galarCatchcoinShopItems?: CatchcoinShop;

    constructor(player: Player, Poke: Poke) {
        this.player = player;
        this.Poke = Poke;

        this.pokecoinShopItems = [
            {
                name: 'Pokeball',
                pokecoins: 100,
                ball: 'pokeball',
            },
            {
                name: 'Greatball',
                pokecoins: 500,
                ball: 'greatball',
            },
            {
                name: 'Ultraball',
                pokecoins: 1000,
                ball: 'ultraball',
            },
            {
                name: 'Revive',
                pokecoins: 1000,
                battleItem: 'revive',
            },
            {
                name: 'Max Revive',
                pokecoins: 1000,
                battleItem: 'maxRevive',
            },
        ];
        this.johtoPokecoinShopItems = [
            {
                name: 'Pokeball',
                pokecoins: 100,
                ball: 'pokeball',
            },
            {
                name: 'Greatball',
                pokecoins: 500,
                ball: 'greatball',
            },
            {
                name: 'Ultraball',
                pokecoins: 1000,
                ball: 'ultraball',
            },
        ];
        this.hoennPokecoinShopItems = [
            {
                name: 'Pokeball',
                pokecoins: 100,
                ball: 'pokeball',
            },
            {
                name: 'Greatball',
                pokecoins: 500,
                ball: 'greatball',
            },
            {
                name: 'Ultraball',
                pokecoins: 1000,
                ball: 'ultraball',
            },
        ];
        this.sinnohPokecoinShopItems = [
            {
                name: 'Pokeball',
                pokecoins: 100,
                ball: 'pokeball',
            },
            {
                name: 'Greatball',
                pokecoins: 500,
                ball: 'greatball',
            },
            {
                name: 'Ultraball',
                pokecoins: 1000,
                ball: 'ultraball',
            },
        ];
        this.unovaPokecoinShopItems = [
            {
                name: 'Pokeball',
                pokecoins: 100,
                ball: 'pokeball',
            },
            {
                name: 'Greatball',
                pokecoins: 500,
                ball: 'greatball',
            },
            {
                name: 'Ultraball',
                pokecoins: 1000,
                ball: 'ultraball',
            },
        ];
        this.kalosPokecoinShopItems = [
            {
                name: 'Pokeball',
                pokecoins: 100,
                ball: 'pokeball',
            },
            {
                name: 'Greatball',
                pokecoins: 500,
                ball: 'greatball',
            },
            {
                name: 'Ultraball',
                pokecoins: 1000,
                ball: 'ultraball',
            },
        ];
        this.alolaPokecoinShopItems = [
            {
                name: 'Pokeball',
                pokecoins: 100,
                ball: 'pokeball',
            },
            {
                name: 'Greatball',
                pokecoins: 500,
                ball: 'greatball',
            },
            {
                name: 'Ultraball',
                pokecoins: 1000,
                ball: 'ultraball',
            },
        ];
        this.battlecoinShopItems = [
            {
                name: 'Razz Berry',
                battlecoins: 2500,
                unlockable: 'razzBerry',
            },
            {
                name: 'Masterball',
                battlecoins: 10000,
                ball: 'masterball',
            },
        ];
        this.johtoBattlecoinShopItems = [
            {
                name: 'Razz Berry',
                battlecoins: 250,
                unlockable: 'razzBerry',
            },
            {
                name: 'Masterball',
                battlecoins: 1000,
                ball: 'masterball',
            },
        ];
        this.hoennBattlecoinShopItems = [
            {
                name: 'Razz Berry',
                battlecoins: 250,
                unlockable: 'razzBerry',
            },
            {
                name: 'Masterball',
                battlecoins: 1000,
                ball: 'masterball',
            },
        ];
        this.sinnohBattlecoinShopItems = [
            {
                name: 'Razz Berry',
                battlecoins: 250,
                unlockable: 'razzBerry',
            },
            {
                name: 'Masterball',
                battlecoins: 1000,
                ball: 'masterball',
            },
        ];
        this.unovaBattlecoinShopItems = [
            {
                name: 'Razz Berry',
                battlecoins: 250,
                unlockable: 'razzBerry',
            },
            {
                name: 'Masterball',
                battlecoins: 1000,
                ball: 'masterball',
            },
        ];
        this.kalosBattlecoinShopItems = [
            {
                name: 'Abomasite',
                battlecoins: 1000,
                megaStones: 'abomasite',
            },
            {
                name: 'Absolite',
                battlecoins: 1000,
                megaStones: 'absolite',
            },
            {
                name: 'Aerodactylite',
                battlecoins: 1000,
                megaStones: 'aerodactylite',
            },
            {
                name: 'Aggronite',
                battlecoins: 1000,
                megaStones: 'aggronite',
            },
            {
                name: 'Alakazite',
                battlecoins: 1000,
                megaStones: 'alakazite',
            },
            {
                name: 'Altarianite',
                battlecoins: 1000,
                megaStones: 'altarianite',
            },
            {
                name: 'Ampharosite',
                battlecoins: 1000,
                megaStones: 'ampharosite',
            },
            {
                name: 'Audinite',
                battlecoins: 1000,
                megaStones: 'audinite',
            },
            {
                name: 'Banettite',
                battlecoins: 1000,
                megaStones: 'banettite',
            },
            {
                name: 'Beedrillite',
                battlecoins: 1000,
                megaStones: 'beedrillite',
            },
            {
                name: 'Blastoisinite',
                battlecoins: 1000,
                megaStones: 'blastoisinite',
            },
            {
                name: 'Blazikenite',
                battlecoins: 1000,
                megaStones: 'blazikenite',
            },
            {
                name: 'Cameruptite',
                battlecoins: 1000,
                megaStones: 'cameruptite',
            },
            {
                name: 'Charizardite Y',
                battlecoins: 1000,
                megaStones: 'charizarditeY',
            },
            {
                name: 'Diancite',
                battlecoins: 1000,
                megaStones: 'diancite',
            },
            {
                name: 'Galladite',
                battlecoins: 1000,
                megaStones: 'galladite',
            },
            {
                name: 'Garchompite',
                battlecoins: 1000,
                megaStones: 'garchompite',
            },
            {
                name: 'Gardevoirite',
                battlecoins: 1000,
                megaStones: 'gardevoirite',
            },
            {
                name: 'Gengarite',
                battlecoins: 1000,
                megaStones: 'gengarite',
            },
            {
                name: 'Glalitite',
                battlecoins: 1000,
                megaStones: 'glalitite',
            },
            {
                name: 'Gyaradosite',
                battlecoins: 1000,
                megaStones: 'gyaradosite',
            },
            {
                name: 'Heracronite',
                battlecoins: 1000,
                megaStones: 'heracronite',
            },
            {
                name: 'Houndoominite',
                battlecoins: 1000,
                megaStones: 'houndoominite',
            },
            {
                name: 'Kangaskhanite',
                battlecoins: 1000,
                megaStones: 'kangaskhanite',
            },
            {
                name: 'Latiasite',
                battlecoins: 1000,
                megaStones: 'latiasite',
            },
            {
                name: 'Latiosite',
                battlecoins: 1000,
                megaStones: 'latiosite',
            },
            {
                name: 'Lopunnite',
                battlecoins: 1000,
                megaStones: 'lopunnite',
            },
            {
                name: 'Lucarionite',
                battlecoins: 1000,
                megaStones: 'lucarionite',
            },
            {
                name: 'Manectite',
                battlecoins: 1000,
                megaStones: 'manectite',
            },
            {
                name: 'Mawilite',
                battlecoins: 1000,
                megaStones: 'mawilite',
            },
            {
                name: 'Medichamite',
                battlecoins: 1000,
                megaStones: 'medichamite',
            },
            {
                name: 'Metagrossite',
                battlecoins: 1000,
                megaStones: 'metagrossite',
            },
            {
                name: 'Mewtwonite X',
                battlecoins: 1000,
                megaStones: 'mewtwoniteX',
            },
            {
                name: 'Mewtwonite Y',
                battlecoins: 1000,
                megaStones: 'mewtwoniteY',
            },
            {
                name: 'Pidgeotite',
                battlecoins: 1000,
                megaStones: 'pidgeotite',
            },
            {
                name: 'Pinsirite',
                battlecoins: 1000,
                megaStones: 'pinsirite',
            },
            {
                name: 'Sablenite',
                battlecoins: 1000,
                megaStones: 'sablenite',
            },
            {
                name: 'Salamencite',
                battlecoins: 1000,
                megaStones: 'salamencite',
            },
            {
                name: 'Sceptilite',
                battlecoins: 1000,
                megaStones: 'sceptilite',
            },
            {
                name: 'Scizorite',
                battlecoins: 1000,
                megaStones: 'scizorite',
            },
            {
                name: 'Sharpedonite',
                battlecoins: 1000,
                megaStones: 'sharpedonite',
            },
            {
                name: 'Slowbronite',
                battlecoins: 1000,
                megaStones: 'slowbronite',
            },
            {
                name: 'Swampertite',
                battlecoins: 1000,
                megaStones: 'swampertite',
            },
            {
                name: 'Tyranitarite',
                battlecoins: 1000,
                megaStones: 'tyranitarite',
            },
        ];
        this.alolaBattlecoinShopItems = [
            {
                name: 'Razz Berry',
                battlecoins: 250,
                unlockable: 'razzBerry',
            },
            {
                name: 'Masterball',
                battlecoins: 1000,
                ball: 'masterball',
            },
        ];
        this.catchcoinShopItems = [
            {
                name: 'Old Rod',
                catchcoins: 100,
                unlockable: 'kantoOldRod',
            },
            {
                name: 'Good Rod',
                catchcoins: 1000,
                unlockable: 'kantoGoodRod',
            },
            {
                name: 'Super Rod',
                catchcoins: 10000,
                unlockable: 'kantoSuperRod',
            },
            {
                name: 'Thunder Stone',
                catchcoins: 1000,
                unlockable: 'thunderStone',
            },
            {
                name: 'Fire Stone',
                catchcoins: 1000,
                unlockable: 'fireStone',
            },
            {
                name: 'Water Stone',
                catchcoins: 1000,
                unlockable: 'waterStone',
            },
            {
                name: 'Leaf Stone',
                catchcoins: 1000,
                unlockable: 'leafStone',
            },
            {
                name: 'Moon Stone',
                catchcoins: 1000,
                unlockable: 'moonStone',
            },
        ];
        this.johtoCatchcoinShopItems = [
            {
                name: 'Old Rod',
                catchcoins: 100,
                unlockable: 'johtoOldRod',
            },
            {
                name: 'Good Rod',
                catchcoins: 1000,
                unlockable: 'johtoGoodRod',
            },
            {
                name: 'Super Rod',
                catchcoins: 10000,
                unlockable: 'johtoSuperRod',
            },
            {
                name: 'Sun Stone',
                catchcoins: 1000,
                unlockable: 'sunStone',
            },
            {
                name: 'Metal Coat',
                catchcoins: 1000,
                unlockable: 'metalCoat',
            },
            {
                name: 'Soothe Bell',
                catchcoins: 1000,
                unlockable: 'sootheBell',
            },
            {
                name: 'Upgrade',
                catchcoins: 1000,
                unlockable: 'upGrade',
            },
            {
                name: 'Dragon Scale',
                catchcoins: 1000,
                unlockable: 'dragonScale',
            },
        ];
        this.hoennCatchcoinShopItems = [
            {
                name: 'Old Rod',
                catchcoins: 100,
                unlockable: 'hoennOldRod',
            },
            {
                name: 'Good Rod',
                catchcoins: 1000,
                unlockable: 'hoennGoodRod',
            },
            {
                name: 'Super Rod',
                catchcoins: 10000,
                unlockable: 'hoennSuperRod',
            },
        ];
        this.sinnohCatchcoinShopItems = [
            {
                name: 'Old Rod',
                catchcoins: 100,
                unlockable: 'sinnohOldRod',
            },
            {
                name: 'Good Rod',
                catchcoins: 1000,
                unlockable: 'sinnohGoodRod',
            },
            {
                name: 'Super Rod',
                catchcoins: 10000,
                unlockable: 'sinnohSuperRod',
            },
        ];
        this.unovaCatchcoinShopItems = [
            {
                name: 'Old Rod',
                catchcoins: 100,
                unlockable: 'unovaOldRod',
            },
            {
                name: 'Good Rod',
                catchcoins: 1000,
                unlockable: 'unovaGoodRod',
            },
            {
                name: 'Super Rod',
                catchcoins: 10000,
                unlockable: 'unovaSuperRod',
            },
        ];
        this.kalosCatchcoinShopItems = [
            {
                name: 'Old Rod',
                catchcoins: 100,
                unlockable: 'kalosOldRod',
            },
            {
                name: 'Good Rod',
                catchcoins: 1000,
                unlockable: 'kalosGoodRod',
            },
            {
                name: 'Super Rod',
                catchcoins: 10000,
                unlockable: 'kalosSuperRod',
            },
        ];
        this.alolaCatchcoinShopItems = [
            {
                name: 'Old Rod',
                catchcoins: 100,
                unlockable: 'alolaOldRod',
            },
            {
                name: 'Good Rod',
                catchcoins: 1000,
                unlockable: 'alolaGoodRod',
            },
            {
                name: 'Super Rod',
                catchcoins: 10000,
                unlockable: 'alolaSuperRod',
            },
        ];
    }

    renderPokeCoinShop(): void {
        let pokecoinShopHTML = '';
        for (let i = 0; i < this.pokecoinShopItems.length; i++) {
            const item = this.pokecoinShopItems[i];
            let canBuy = true;
            let canBuy10 = true;
            let canBuy100 = true;
            const own = false;
            if (this.player.currencyAmount.pokecoins < item.pokecoins) canBuy = false;
            if (this.player.currencyAmount.pokecoins < item.pokecoins * 10) canBuy10 = false;
            if (this.player.currencyAmount.pokecoins < item.pokecoins * 100) canBuy100 = false;
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const disableButton10 = (!canBuy10 || own) ? ' disabled="true"' : '';
            const disableButton100 = (!canBuy100 || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonText10 = (own) ? 'Own' : 'Buy 10';
            const buttonText100 = (own) ? 'Own' : 'Buy 100';
            const buttonHTML = ` <button onclick="town.buyPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            const button10HTML = ` <button onclick="town.buyPokeCoinItem10('${i}')"${disableButton10}>${buttonText10}</button>`;
            const button100HTML = ` <button onclick="town.buyPokeCoinItem100('${i}')"${disableButton100}>${buttonText100}</button>`;
            if ('ball' in item) {
                pokecoinShopHTML += `${'<li><img src="assets/images/pokeballs/'}${item.ball}.png" height="30" width="30"></img>: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${item.pokecoins}${buttonHTML}${button10HTML}${button100HTML}</li>`;
            }
            if ('battleItem' in item) {
                pokecoinShopHTML += `${'<li><img src="assets/images/battleItems/'}${item.battleItem}.png" height="30" width="30"></img>: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${item.pokecoins}${buttonHTML}${button10HTML}${button100HTML}</li>`;
            }
        }
        $('#pokecoinShopItems').innerHTML = pokecoinShopHTML;
    }

    renderJohtoPokeCoinShop(): void {
        let pokecoinShopHTML = '';
        for (let i = 0; i < this.johtoPokecoinShopItems.length; i++) {
            const item = this.johtoPokecoinShopItems[i];
            let canBuy = true;
            let canBuy10 = true;
            let canBuy100 = true;
            const own = false;
            if (this.player.currencyAmount.pokecoins < item.pokecoins) canBuy = false;
            if (this.player.currencyAmount.pokecoins < item.pokecoins * 10) canBuy10 = false;
            if (this.player.currencyAmount.pokecoins < item.pokecoins * 100) canBuy100 = false;
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const disableButton10 = (!canBuy10 || own) ? ' disabled="true"' : '';
            const disableButton100 = (!canBuy100 || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonText10 = (own) ? 'Own' : 'Buy 10';
            const buttonText100 = (own) ? 'Own' : 'Buy 100';
            const buttonHTML = ` <button onclick="town.buyJohtoPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            const button10HTML = ` <button onclick="town.buyJohtoPokeCoinItem10('${i}')"${disableButton10}>${buttonText10}</button>`;
            const button100HTML = ` <button onclick="town.buyJohtoPokeCoinItem100('${i}')"${disableButton100}>${buttonText100}</button>`;
            pokecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${item.pokecoins}${buttonHTML}${button10HTML}${button100HTML}</li>`;
        }
        $('#pokecoinShopItems').innerHTML = pokecoinShopHTML;
    }

    renderHoennPokeCoinShop(): void {
        let pokecoinShopHTML = '';
        for (let i = 0; i < this.hoennPokecoinShopItems.length; i++) {
            const item = this.hoennPokecoinShopItems[i];
            let canBuy = true;
            const own = false;
            if (this.player.currencyAmount.pokecoins < item.pokecoins) canBuy = false;
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyHoennPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            pokecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${item.pokecoins}${buttonHTML}</li>`;
        }
        $('#pokecoinShopItems').innerHTML = pokecoinShopHTML;
    }

    renderSinnohPokeCoinShop(): void {
        let pokecoinShopHTML = '';
        for (let i = 0; i < this.sinnohPokecoinShopItems.length; i++) {
            const item = this.sinnohPokecoinShopItems[i];
            let canBuy = true;
            const own = false;
            if (this.player.currencyAmount.pokecoins < item.pokecoins) canBuy = false;
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buySinnohPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            pokecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${item.pokecoins}${buttonHTML}</li>`;
        }
        $('#pokecoinShopItems').innerHTML = pokecoinShopHTML;
    }

    renderUnovaPokeCoinShop(): void {
        let pokecoinShopHTML = '';
        for (let i = 0; i < this.unovaPokecoinShopItems.length; i++) {
            const item = this.unovaPokecoinShopItems[i];
            let canBuy = true;
            const own = false;
            if (this.player.currencyAmount.pokecoins < item.pokecoins) canBuy = false;
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyUnovaPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            pokecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${item.pokecoins}${buttonHTML}</li>`;
        }
        $('#pokecoinShopItems').innerHTML = pokecoinShopHTML;
    }

    renderKalosPokeCoinShop(): void {
        let pokecoinShopHTML = '';
        for (let i = 0; i < this.kalosPokecoinShopItems.length; i++) {
            const item = this.kalosPokecoinShopItems[i];
            let canBuy = true;
            const own = false;
            if (this.player.currencyAmount.pokecoins < item.pokecoins) canBuy = false;
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyKalosPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            pokecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${item.pokecoins}${buttonHTML}</li>`;
        }
        $('#pokecoinShopItems').innerHTML = pokecoinShopHTML;
    }

    renderAlolaPokeCoinShop(): void {
        let pokecoinShopHTML = '';
        for (let i = 0; i < this.alolaPokecoinShopItems.length; i++) {
            const item = this.alolaPokecoinShopItems[i];
            let canBuy = true;
            const own = false;
            if (this.player.currencyAmount.pokecoins < item.pokecoins) canBuy = false;
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyAlolaPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            pokecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${item.pokecoins}${buttonHTML}</li>`;
        }
        $('#pokecoinShopItems').innerHTML = pokecoinShopHTML;
    }

    renderBattleCoinShop(): void {
        let battlecoinShopHTML = '';
        for (let i = 0; i < this.battlecoinShopItems.length; i++) {
            const item = this.battlecoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.battlecoins < item.battlecoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyBattleCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            battlecoinShopHTML += `${'<li><img src="assets/images/battleShop/'}${item.name}.png" height="30" width="30"></img>: <img src="assets/images/currency/BattleCoin.png" height="16" width="16"></img>${item.battlecoins}${buttonHTML}</li>`;
        }
        $('#battlecoinShopItems').innerHTML = battlecoinShopHTML;
    }

    renderJohtoBattleCoinShop(): void {
        let battlecoinShopHTML = '';
        for (let i = 0; i < this.johtoBattlecoinShopItems.length; i++) {
            const item = this.johtoBattlecoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.battlecoins < item.battlecoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyJohtoBattleCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            battlecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/BattleCoin.png" height="16" width="16"></img>${item.battlecoins}${buttonHTML}</li>`;
        }
        $('#battlecoinShopItems').innerHTML = battlecoinShopHTML;
    }

    renderHoennBattleCoinShop(): void {
        let battlecoinShopHTML = '';
        for (let i = 0; i < this.hoennBattlecoinShopItems.length; i++) {
            const item = this.hoennBattlecoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.battlecoins < item.battlecoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyHoennBattleCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            battlecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/BattleCoin.png" height="16" width="16"></img>${item.battlecoins}${buttonHTML}</li>`;
        }
        $('#battlecoinShopItems').innerHTML = battlecoinShopHTML;
    }

    renderSinnohBattleCoinShop(): void {
        let battlecoinShopHTML = '';
        for (let i = 0; i < this.sinnohBattlecoinShopItems.length; i++) {
            const item = this.sinnohBattlecoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.battlecoins < item.battlecoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buySinnohBattleCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            battlecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/BattleCoin.png" height="16" width="16"></img>${item.battlecoins}${buttonHTML}</li>`;
        }
        $('#battlecoinShopItems').innerHTML = battlecoinShopHTML;
    }

    renderUnovaBattleCoinShop(): void {
        let battlecoinShopHTML = '';
        for (let i = 0; i < this.unovaBattlecoinShopItems.length; i++) {
            const item = this.unovaBattlecoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.battlecoins < item.battlecoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyUnovaBattleCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            battlecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/BattleCoin.png" height="16" width="16"></img>${item.battlecoins}${buttonHTML}</li>`;
        }
        $('#battlecoinShopItems').innerHTML = battlecoinShopHTML;
    }

    renderKalosBattleCoinShop(): void {
        let battlecoinShopHTML = '';
        for (let i = 0; i < this.kalosBattlecoinShopItems.length; i++) {
            const item = this.kalosBattlecoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.battlecoins < item.battlecoins) canBuy = false;
            if ('megaStones' in item && this.player.megaStones[item.megaStones] || !this.player.unlocked.megaBracelet) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyKalosBattleCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            battlecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/BattleCoin.png" height="16" width="16"></img>${item.battlecoins}${buttonHTML}</>`;
        }
        $('#battlecoinShopItems').innerHTML = battlecoinShopHTML;
    }

    renderAlolaBattleCoinShop(): void {
        let battlecoinShopHTML = '';
        for (let i = 0; i < this.alolaBattlecoinShopItems.length; i++) {
            const item = this.alolaBattlecoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.battlecoins < item.battlecoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyAlolaBattleCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            battlecoinShopHTML += `<li>${item.name}: <img src="assets/images/currency/BattleCoin.png" height="16" width="16"></img>${item.battlecoins}${buttonHTML}</li>`;
        }
        $('#battlecoinShopItems').innerHTML = battlecoinShopHTML;
    }

    renderCatchCoinShop(): void {
        let catchcoinShopHTML = '';
        for (let i = 0; i < this.catchcoinShopItems.length; i++) {
            const item = this.catchcoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.catchcoins < item.catchcoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyCatchCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            catchcoinShopHTML += `${'<li><img src="assets/images/evoStones/'}${item.name}.png" height="30" width="30"></img>: <img src="assets/images/currency/CatchCoin.png" height="16" width="16"></img>${item.catchcoins}${buttonHTML}</li>`;
        }
        $('#catchcoinShopItems').innerHTML = catchcoinShopHTML;
    }

    renderJohtoCatchCoinShop(): void {
        let catchcoinShopHTML = '';
        for (let i = 0; i < this.johtoCatchcoinShopItems.length; i++) {
            const item = this.johtoCatchcoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.catchcoins < item.catchcoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyJohtoCatchCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            catchcoinShopHTML += `${'<li><img src="assets/images/evoStones/'}${item.name}.png" height="30" width="30"></img>: <img src="assets/images/currency/CatchCoin.png" height="16" width="16"></img>${item.catchcoins}${buttonHTML}</li>`;
        }
        $('#catchcoinShopItems').innerHTML = catchcoinShopHTML;
    }

    renderHoennCatchCoinShop(): void {
        let catchcoinShopHTML = '';
        for (let i = 0; i < this.hoennCatchcoinShopItems.length; i++) {
            const item = this.hoennCatchcoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.catchcoins < item.catchcoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyHoennCatchCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            catchcoinShopHTML += `${'<li><img src="assets/images/evoStones/'}${item.name}.png" height="30" width="30"></img>: <img src="assets/images/currency/CatchCoin.png" height="16" width="16"></img>${item.catchcoins}${buttonHTML}</li>`;
        }
        $('#catchcoinShopItems').innerHTML = catchcoinShopHTML;
    }

    renderSinnohCatchCoinShop(): void {
        let catchcoinShopHTML = '';
        for (let i = 0; i < this.sinnohCatchcoinShopItems.length; i++) {
            const item = this.sinnohCatchcoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.catchcoins < item.catchcoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buySinnohCatchCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            catchcoinShopHTML += `${'<li><img src="assets/images/evoStones/'}${item.name}.png" height="30" width="30"></img>: <img src="assets/images/currency/CatchCoin.png" height="16" width="16"></img>${item.catchcoins}${buttonHTML}</li>`;
        }
        $('#catchcoinShopItems').innerHTML = catchcoinShopHTML;
    }

    renderUnovaCatchCoinShop(): void {
        let catchcoinShopHTML = '';
        for (let i = 0; i < this.unovaCatchcoinShopItems.length; i++) {
            const item = this.unovaCatchcoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.catchcoins < item.catchcoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyUnovaCatchCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            catchcoinShopHTML += `${'<li><img src="assets/images/evoStones/'}${item.name}.png" height="30" width="30"></img>: <img src="assets/images/currency/CatchCoin.png" height="16" width="16"></img>${item.catchcoins}${buttonHTML}</li>`;
        }
        $('#catchcoinShopItems').innerHTML = catchcoinShopHTML;
    }

    renderKalosCatchCoinShop(): void {
        let catchcoinShopHTML = '';
        for (let i = 0; i < this.kalosCatchcoinShopItems.length; i++) {
            const item = this.kalosCatchcoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.catchcoins < item.catchcoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyKalosCatchCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            catchcoinShopHTML += `${'<li><img src="assets/images/evoStones/'}${item.name}.png" height="30" width="30"></img>: <img src="assets/images/currency/CatchCoin.png" height="16" width="16"></img>${item.catchcoins}${buttonHTML}</li>`;
        }
        $('#catchcoinShopItems').innerHTML = catchcoinShopHTML;
    }

    renderAlolaCatchCoinShop(): void {
        let catchcoinShopHTML = '';
        for (let i = 0; i < this.alolaCatchcoinShopItems.length; i++) {
            const item = this.alolaCatchcoinShopItems[i];
            let canBuy = true;
            let own = false;
            if (this.player.currencyAmount.catchcoins < item.catchcoins) canBuy = false;
            if ('unlockable' in item && this.player.unlocked[item.unlockable]) {
                canBuy = false;
                own = true;
            }
            const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
            const buttonText = (own) ? 'Own' : 'Buy';
            const buttonHTML = ` <button onclick="town.buyAlolaCatchCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
            catchcoinShopHTML += `${'<li><img src="assets/images/evoStones/'}${item.name}.png" height="30" width="30"></img>: <img src="assets/images/currency/CatchCoin.png" height="16" width="16"></img>${item.catchcoins}${buttonHTML}</li>`;
        }
        $('#catchcoinShopItems').innerHTML = catchcoinShopHTML;
    }

    buyPokeCoinItem(index: number) {
        const item = this.pokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < item.pokecoins) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= item.pokecoins;
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            if ('battleItem' in item) {
                this.player.battleItem[item.battleItem]++;
                this.dom.renderBalls();
            }
            this.renderPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyPokeCoinItem10(index: number) {
        const item = this.pokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < (item.pokecoins * 10)) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= (item.pokecoins * 10);
            if ('ball' in item) {
                this.player.ballsAmount[item.ball] += 10;
                this.dom.renderBalls();
            }
            this.renderPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyPokeCoinItem100(index: number) {
        const item = this.pokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < (item.pokecoins * 100)) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= (item.pokecoins * 100);
            if ('ball' in item) {
                this.player.ballsAmount[item.ball] += 100;
                this.dom.renderBalls();
            }
            this.renderPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyJohtoPokeCoinItem(index: number) {
        const item = this.johtoPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < item.pokecoins) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= item.pokecoins;
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderJohtoPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyJohtoPokeCoinItem10(index: number) {
        const item = this.johtoPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < (item.pokecoins * 10)) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= (item.pokecoins * 10);
            if ('ball' in item) {
                this.player.ballsAmount[item.ball] += 10;
                this.dom.renderBalls();
            }
            this.renderJohtoPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyJohtoPokeCoinItem100(index: number) {
        const item = this.johtoPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < (item.pokecoins * 100)) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= (item.pokecoins * 100);
            if ('ball' in item) {
                this.player.ballsAmount[item.ball] += 100;
                this.dom.renderBalls();
            }
            this.renderJohtoPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyHoennPokeCoinItem(index: number) {
        const item = this.hoennPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < item.pokecoins) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= item.pokecoins;
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderHoennPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyHoennPokeCoinItem10(index: number) {
        const item = this.hoennPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < (item.pokecoins * 10)) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= (item.pokecoins * 10);
            if ('ball' in item) {
                this.player.ballsAmount[item.ball] += 10;
                this.dom.renderBalls();
            }
            this.renderHoennPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyHoennPokeCoinItem100(index: number) {
        const item = this.hoennPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < (item.pokecoins * 100)) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= (item.pokecoins * 100);
            if ('ball' in item) {
                this.player.ballsAmount[item.ball] += 100;
                this.dom.renderBalls();
            }
            this.renderHoennPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buySinnohPokeCoinItem(index: number) {
        const item = this.sinnohPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < item.pokecoins) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= item.pokecoins;
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderSinnohPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyUnovaPokeCoinItem(index: number) {
        const item = this.unovaPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < item.pokecoins) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= item.pokecoins;
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderUnovaPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyKalosPokeCoinItem(index: number) {
        const item = this.kalosPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < item.pokecoins) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= item.pokecoins;
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderKalosPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyAlolaPokeCoinItem(index: number) {
        const item = this.alolaPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < item.pokecoins) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= item.pokecoins;
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderAlolaPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buySinnohPokeCoinItem10(index: number) {
        const item = this.sinnohPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < (item.pokecoins * 10)) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= (item.pokecoins * 10);
            if ('ball' in item) {
                this.player.ballsAmount[item.ball] += 10;
                this.dom.renderBalls();
            }
            this.renderSinnohPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyUnovaPokeCoinItem10(index: number) {
        const item = this.unovaPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < (item.pokecoins * 10)) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= (item.pokecoins * 10);
            if ('ball' in item) {
                this.player.ballsAmount[item.ball] += 10;
                this.dom.renderBalls();
            }
            this.renderUnovaPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyKalosPokeCoinItem10(index: number) {
        const item = this.kalosPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < (item.pokecoins * 10)) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= (item.pokecoins * 10);
            if ('ball' in item) {
                this.player.ballsAmount[item.ball] += 10;
                this.dom.renderBalls();
            }
            this.renderKalosPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyAlolaPokeCoinItem10(index: number) {
        const item = this.alolaPokecoinShopItems[index];
        if (this.player.currencyAmount.pokecoins < (item.pokecoins * 10)) {
            return false;
        } else {
            this.player.currencyAmount.pokecoins -= (item.pokecoins * 10);
            if ('ball' in item) {
                this.player.ballsAmount[item.ball] += 10;
                this.dom.renderBalls();
            }
            this.renderAlolaPokeCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyBattleCoinItem(index: number) {
        const item = this.battlecoinShopItems[index];
        if (this.player.currencyAmount.battlecoins < item.battlecoins) {
            return false;
        } else {
            this.player.currencyAmount.battlecoins -= item.battlecoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
            }
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderBattleCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyJohtoBattleCoinItem(index: number) {
        const item = this.johtoBattlecoinShopItems[index];
        if (this.player.currencyAmount.battlecoins < item.battlecoins) {
            return false;
        } else {
            this.player.currencyAmount.battlecoins -= item.battlecoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
            }
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderJohtoBattleCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyHoennBattleCoinItem(index: number) {
        const item = this.hoennBattlecoinShopItems[index];
        if (this.player.currencyAmount.battlecoins < item.battlecoins) {
            return false;
        } else {
            this.player.currencyAmount.battlecoins -= item.battlecoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
            }
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderHoennBattleCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buySinnohBattleCoinItem(index: number) {
        const item = this.sinnohBattlecoinShopItems[index];
        if (this.player.currencyAmount.battlecoins < item.battlecoins) {
            return false;
        } else {
            this.player.currencyAmount.battlecoins -= item.battlecoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
            }
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderSinnohBattleCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyUnovaBattleCoinItem(index: number) {
        const item = this.unovaBattlecoinShopItems[index];
        if (this.player.currencyAmount.battlecoins < item.battlecoins) {
            return false;
        } else {
            this.player.currencyAmount.battlecoins -= item.battlecoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
            }
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderUnovaBattleCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyKalosBattleCoinItem(index: number) {
        const item = this.kalosBattlecoinShopItems[index];
        if (this.player.currencyAmount.battlecoins < item.battlecoins) {
            return false;
        } else {
            this.player.currencyAmount.battlecoins -= item.battlecoins;
            if ('megaStones' in item) {
                this.player.megaStones[item.megaStones] = 1;
            }
            this.renderKalosBattleCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyAlolaBattleCoinItem(index: number) {
        const item = this.alolaBattlecoinShopItems[index];
        if (this.player.currencyAmount.battlecoins < item.battlecoins) {
            return false;
        } else {
            this.player.currencyAmount.battlecoins -= item.battlecoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
            }
            if ('ball' in item) {
                this.player.ballsAmount[item.ball]++;
                this.dom.renderBalls();
            }
            this.renderAlolaBattleCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyCatchCoinItem(index: number) {
        const item = this.catchcoinShopItems[index];
        if (this.player.currencyAmount.catchcoins < item.catchcoins) {
            return false;
        } else {
            this.player.currencyAmount.catchcoins -= item.catchcoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
                this.dom.renderRouteList();
            }
            this.renderCatchCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyJohtoCatchCoinItem(index: number) {
        const item = this.johtoCatchcoinShopItems[index];
        if (this.player.currencyAmount.catchcoins < item.catchcoins) {
            return false;
        } else {
            this.player.currencyAmount.catchcoins -= item.catchcoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
                this.dom.renderRouteList();
            }
            this.renderJohtoCatchCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyHoennCatchCoinItem(index: number) {
        const item = this.hoennCatchcoinShopItems[index];
        if (this.player.currencyAmount.catchcoins < item.catchcoins) {
            return false;
        } else {
            this.player.currencyAmount.catchcoins -= item.catchcoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
                this.dom.renderRouteList();
            }
            this.renderHoennCatchCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buySinnohCatchCoinItem(index: number) {
        const item = this.sinnohCatchcoinShopItems[index];
        if (this.player.currencyAmount.catchcoins < item.catchcoins) {
            return false;
        } else {
            this.player.currencyAmount.catchcoins -= item.catchcoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
                this.dom.renderRouteList();
            }
            this.renderSinnohCatchCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyUnovaCatchCoinItem(index: number) {
        const item = this.unovaCatchcoinShopItems[index];
        if (this.player.currencyAmount.catchcoins < item.catchcoins) {
            return false;
        } else {
            this.player.currencyAmount.catchcoins -= item.catchcoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
                this.dom.renderRouteList();
            }
            this.renderUnovaCatchCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyKalosCatchCoinItem(index: number) {
        const item = this.kalosCatchcoinShopItems[index];
        if (this.player.currencyAmount.catchcoins < item.catchcoins) {
            return false;
        } else {
            this.player.currencyAmount.catchcoins -= item.catchcoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
                this.dom.renderRouteList();
            }
            this.renderKalosCatchCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    buyAlolaCatchCoinItem(index: number) {
        const item = this.alolaCatchcoinShopItems[index];
        if (this.player.currencyAmount.catchcoins < item.catchcoins) {
            return false;
        } else {
            this.player.currencyAmount.catchcoins -= item.catchcoins;
            if ('unlockable' in item) {
                this.player.unlocked[item.unlockable] = 1;
                this.dom.renderRouteList();
            }
            this.renderAlolaCatchCoinShop(); // force refresh of shop
            this.dom.renderCurrency();
            return true;
        }
    }

    attachDOM(_dom: DOM) {
        this.dom = _dom;
    }
}

export default (player: Player, Poke: Poke): Town => new Town(player, Poke);
