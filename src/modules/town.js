import { $, pokeByName } from './utilities';
import { POKEDEXFLAGS } from './data';

export default (player, Poke) => {
    let dom;

    const Town = {
        pokecoinShopItems: [
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
        ],
        johtoPokecoinShopItems: [
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
        ],
        hoennPokecoinShopItems: [
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
        ],
        battlecoinShopItems: [
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
        ],
        johtoBattlecoinShopItems: [
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
        ],
        hoennBattlecoinShopItems: [
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
        ],
        catchcoinShopItems: [
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
        ],
        johtoCatchcoinShopItems: [
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
        ],
        hoennCatchcoinShopItems: [
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
        ],
        renderPokeCoinShop: function () {
            let pokecoinShopHTML = '';
            for (let i = 0; i < this.pokecoinShopItems.length; i++) {
                let canBuy = true;
                let canBuy10 = true;
                let canBuy100 = true;
                const own = false;
                if (player.currencyAmount.pokecoins < this.pokecoinShopItems[i].pokecoins) canBuy = false;
                if (player.currencyAmount.pokecoins < this.pokecoinShopItems[i].pokecoins * 10) canBuy10 = false;
                if (player.currencyAmount.pokecoins < this.pokecoinShopItems[i].pokecoins * 100) canBuy100 = false;
                const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
                const disableButton10 = (!canBuy10 || own) ? ' disabled="true"' : '';
                const disableButton100 = (!canBuy100 || own) ? ' disabled="true"' : '';
                const buttonText = (own) ? 'Own' : 'Buy';
                const buttonText10 = (own) ? 'Own' : 'Buy 10';
                const buttonText100 = (own) ? 'Own' : 'Buy 100';
                const buttonHTML = ` <button onclick="town.buyPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
                const button10HTML = ` <button onclick="town.buyPokeCoinItem10('${i}')"${disableButton10}>${buttonText10}</button>`;
                const button100HTML = ` <button onclick="town.buyPokeCoinItem100('${i}')"${disableButton100}>${buttonText100}</button>`;
                if (this.pokecoinShopItems[i].ball) {
                    pokecoinShopHTML += `${'<li><img src="assets/images/pokeballs/'}${this.pokecoinShopItems[i].ball}.png" height="30" width="30"></img>: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${this.pokecoinShopItems[i].pokecoins}${buttonHTML}${button10HTML}${button100HTML}</li>`;
                }
                if (this.pokecoinShopItems[i].battleItem) {
                    pokecoinShopHTML += `${'<li><img src="assets/images/battleItems/'}${this.pokecoinShopItems[i].battleItem}.png" height="30" width="30"></img>: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${this.pokecoinShopItems[i].pokecoins}${buttonHTML}${button10HTML}${button100HTML}</li>`;
                }
            }
            $('#pokecoinShopItems').innerHTML = pokecoinShopHTML;
        },
        renderJohtoPokeCoinShop: function () {
            let pokecoinShopHTML = '';
            for (let i = 0; i < this.johtoPokecoinShopItems.length; i++) {
                let canBuy = true;
                let canBuy10 = true;
                let canBuy100 = true;
                const own = false;
                if (player.currencyAmount.pokecoins < this.johtoPokecoinShopItems[i].pokecoins) canBuy = false;
                if (player.currencyAmount.pokecoins < this.johtoPokecoinShopItems[i].pokecoins * 10) canBuy10 = false;
                if (player.currencyAmount.pokecoins < this.johtoPokecoinShopItems[i].pokecoins * 100) canBuy100 = false;
                const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
                const disableButton10 = (!canBuy10 || own) ? ' disabled="true"' : '';
                const disableButton100 = (!canBuy100 || own) ? ' disabled="true"' : '';
                const buttonText = (own) ? 'Own' : 'Buy';
                const buttonText10 = (own) ? 'Own' : 'Buy 10';
                const buttonText100 = (own) ? 'Own' : 'Buy 100';
                const buttonHTML = ` <button onclick="town.buyJohtoPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
                const button10HTML = ` <button onclick="town.buyJohtoPokeCoinItem10('${i}')"${disableButton10}>${buttonText10}</button>`;
                const button100HTML = ` <button onclick="town.buyJohtoPokeCoinItem100('${i}')"${disableButton100}>${buttonText100}</button>`;
                pokecoinShopHTML += `<li>${this.johtoPokecoinShopItems[i].name}: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${this.johtoPokecoinShopItems[i].pokecoins}${buttonHTML}${button10HTML}${button100HTML}</li>`;
            }
            $('#pokecoinShopItems').innerHTML = pokecoinShopHTML;
        },
        renderHoennPokeCoinShop: function () {
            let pokecoinShopHTML = '';
            for (let i = 0; i < this.hoennPokecoinShopItems.length; i++) {
                let canBuy = true;
                const own = false;
                if (player.currencyAmount.pokecoins < this.hoennPokecoinShopItems[i].pokecoins) canBuy = false;
                const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
                const buttonText = (own) ? 'Own' : 'Buy';
                const buttonHTML = ` <button onclick="town.buyHoennPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
                pokecoinShopHTML += `<li>${this.hoennPokecoinShopItems[i].name}: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${this.hoennPokecoinShopItems[i].pokecoins}${buttonHTML}</li>`;
            }
            $('#pokecoinShopItems').innerHTML = pokecoinShopHTML;
        },
        renderBattleCoinShop: function () {
            let battlecoinShopHTML = '';
            for (let i = 0; i < this.battlecoinShopItems.length; i++) {
                let canBuy = true;
                let own = false;
                if (player.currencyAmount.battlecoins < this.battlecoinShopItems[i].battlecoins) canBuy = false;
                if (this.battlecoinShopItems[i].unlockable && player.unlocked[this.battlecoinShopItems[i].unlockable]) {
                    canBuy = false;
                    own = true;
                }
                const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
                const buttonText = (own) ? 'Own' : 'Buy';
                const buttonHTML = ` <button onclick="town.buyBattleCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
                battlecoinShopHTML += `${'<li><img src="assets/images/battleShop/'}${this.battlecoinShopItems[i].name}.png" height="30" width="30"></img>: <img src="assets/images/currency/BattleCoin.png" height="16" width="16"></img>${this.battlecoinShopItems[i].battlecoins}${buttonHTML}</li>`;
            }
            $('#battlecoinShopItems').innerHTML = battlecoinShopHTML;
        },
        renderJohtoBattleCoinShop: function () {
            let battlecoinShopHTML = '';
            for (let i = 0; i < this.johtoBattlecoinShopItems.length; i++) {
                let canBuy = true;
                let own = false;
                if (player.currencyAmount.battlecoins < this.johtoBattlecoinShopItems[i].battlecoins) canBuy = false;
                if (this.johtoBattlecoinShopItems[i].unlockable && player.unlocked[this.johtoBattlecoinShopItems[i].unlockable]) {
                    canBuy = false;
                    own = true;
                }
                const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
                const buttonText = (own) ? 'Own' : 'Buy';
                const buttonHTML = ` <button onclick="town.buyJohtoBattleCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
                battlecoinShopHTML += `<li>${this.johtoBattlecoinShopItems[i].name}: <img src="assets/images/currency/BattleCoin.png" height="16" width="16"></img>${this.johtoBattlecoinShopItems[i].battlecoins}${buttonHTML}</li>`;
            }
            $('#battlecoinShopItems').innerHTML = battlecoinShopHTML;
        },
        renderHoennBattleCoinShop: function () {
            let battlecoinShopHTML = '';
            for (let i = 0; i < this.hoennBattlecoinShopItems.length; i++) {
                let canBuy = true;
                let own = false;
                if (player.currencyAmount.battlecoins < this.hoennBattlecoinShopItems[i].battlecoins) canBuy = false;
                if (this.hoennBattlecoinShopItems[i].unlockable && player.unlocked[this.hoennBattlecoinShopItems[i].unlockable]) {
                    canBuy = false;
                    own = true;
                }
                const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
                const buttonText = (own) ? 'Own' : 'Buy';
                const buttonHTML = ` <button onclick="town.buyHoennBattleCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
                battlecoinShopHTML += `<li>${this.hoennBattlecoinShopItems[i].name}: <img src="assets/images/currency/BattleCoin.png" height="16" width="16"></img>${this.hoennBattlecoinShopItems[i].battlecoins}${buttonHTML}</li>`;
            }
            $('#battlecoinShopItems').innerHTML = battlecoinShopHTML;
        },
        renderCatchCoinShop: function () {
            let catchcoinShopHTML = '';
            for (let i = 0; i < this.catchcoinShopItems.length; i++) {
                let canBuy = true;
                let own = false;
                if (player.currencyAmount.catchcoins < this.catchcoinShopItems[i].catchcoins) canBuy = false;
                if (player.unlocked[this.catchcoinShopItems[i].unlockable]) {
                    canBuy = false;
                    own = true;
                }
                const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
                const buttonText = (own) ? 'Own' : 'Buy';
                const buttonHTML = ` <button onclick="town.buyCatchCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
                catchcoinShopHTML += `${'<li><img src="assets/images/evoStones/'}${this.catchcoinShopItems[i].name}.png" height="30" width="30"></img>: <img src="assets/images/currency/CatchCoin.png" height="16" width="16"></img>${this.catchcoinShopItems[i].catchcoins}${buttonHTML}</li>`;
            }
            $('#catchcoinShopItems').innerHTML = catchcoinShopHTML;
        },
        renderJohtoCatchCoinShop: function () {
            let catchcoinShopHTML = '';
            for (let i = 0; i < this.johtoCatchcoinShopItems.length; i++) {
                let canBuy = true;
                let own = false;
                if (player.currencyAmount.catchcoins < this.johtoCatchcoinShopItems[i].catchcoins) canBuy = false;
                if (player.unlocked[this.johtoCatchcoinShopItems[i].unlockable]) {
                    canBuy = false;
                    own = true;
                }
                const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
                const buttonText = (own) ? 'Own' : 'Buy';
                const buttonHTML = ` <button onclick="town.buyJohtoCatchCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
                catchcoinShopHTML += `${'<li><img src="assets/images/evoStones/'}${this.johtoCatchcoinShopItems[i].name}.png" height="30" width="30"></img>: <img src="assets/images/currency/CatchCoin.png" height="16" width="16"></img>${this.johtoCatchcoinShopItems[i].catchcoins}${buttonHTML}</li>`;
            }
            $('#catchcoinShopItems').innerHTML = catchcoinShopHTML;
        },
        renderHoennCatchCoinShop: function () {
            let catchcoinShopHTML = '';
            for (let i = 0; i < this.hoennCatchcoinShopItems.length; i++) {
                let canBuy = true;
                let own = false;
                if (player.currencyAmount.catchcoins < this.hoennCatchcoinShopItems[i].catchcoins) canBuy = false;
                if (player.unlocked[this.hoennCatchcoinShopItems[i].unlockable]) {
                    canBuy = false;
                    own = true;
                }
                const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
                const buttonText = (own) ? 'Own' : 'Buy';
                const buttonHTML = ` <button onclick="town.buyHoennCatchCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
                catchcoinShopHTML += `${'<li><img src="assets/images/evoStones/'}${this.hoennCatchcoinShopItems[i].name}.png" height="30" width="30"></img>: <img src="assets/images/currency/CatchCoin.png" height="16" width="16"></img>${this.hoennCatchcoinShopItems[i].catchcoins}${buttonHTML}</li>`;
            }
            $('#catchcoinShopItems').innerHTML = catchcoinShopHTML;
        },
        buyPokeCoinItem: function (index) {
            const item = this.pokecoinShopItems[index];
            if (player.currencyAmount.pokecoins < item.pokecoins) {
                return false;
            } else {
                player.currencyAmount.pokecoins -= item.pokecoins;
                if (item.ball) {
                    player.ballsAmount[item.ball]++;
                    dom.renderBalls();
                }
                if (item.battleItem) {
                    player.battleItem[item.battleItem]++;
                    dom.renderBalls();
                }
                this.renderPokeCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyPokeCoinItem10: function (index) {
            const item = this.pokecoinShopItems[index];
            if (player.currencyAmount.pokecoins < (item.pokecoins * 10)) {
                return false;
            } else {
                player.currencyAmount.pokecoins -= (item.pokecoins * 10);
                if (item.ball) {
                    player.ballsAmount[item.ball] += 10;
                    dom.renderBalls();
                }
                this.renderPokeCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyPokeCoinItem100: function (index) {
            const item = this.pokecoinShopItems[index];
            if (player.currencyAmount.pokecoins < (item.pokecoins * 100)) {
                return false;
            } else {
                player.currencyAmount.pokecoins -= (item.pokecoins * 100);
                if (item.ball) {
                    player.ballsAmount[item.ball] += 100;
                    dom.renderBalls();
                }
                this.renderPokeCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyJohtoPokeCoinItem: function (index) {
            const item = this.johtoPokecoinShopItems[index];
            if (player.currencyAmount.pokecoins < item.pokecoins) {
                return false;
            } else {
                player.currencyAmount.pokecoins -= item.pokecoins;
                if (item.ball) {
                    player.ballsAmount[item.ball]++;
                    dom.renderBalls();
                }
                this.renderJohtoPokeCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyJohtoPokeCoinItem10: function (index) {
            const item = this.johtoPokecoinShopItems[index];
            if (player.currencyAmount.pokecoins < (item.pokecoins * 10)) {
                return false;
            } else {
                player.currencyAmount.pokecoins -= (item.pokecoins * 10);
                if (item.ball) {
                    player.ballsAmount[item.ball] += 10;
                    dom.renderBalls();
                }
                this.renderJohtoPokeCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyJohtoPokeCoinItem100: function (index) {
            const item = this.johtoPokecoinShopItems[index];
            if (player.currencyAmount.pokecoins < (item.pokecoins * 100)) {
                return false;
            } else {
                player.currencyAmount.pokecoins -= (item.pokecoins * 100);
                if (item.ball) {
                    player.ballsAmount[item.ball] += 100;
                    dom.renderBalls();
                }
                this.renderJohtoPokeCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyHoennPokeCoinItem: function (index) {
            const item = this.hoennPokecoinShopItems[index];
            if (player.currencyAmount.pokecoins < item.pokecoins) {
                return false;
            } else {
                player.currencyAmount.pokecoins -= item.pokecoins;
                if (item.ball) {
                    player.ballsAmount[item.ball]++;
                    dom.renderBalls();
                }
                this.renderHoennPokeCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyHoennPokeCoinItem10: function (index) {
            const item = this.hoennPokecoinShopItems[index];
            if (player.currencyAmount.pokecoins < (item.pokecoins * 10)) {
                return false;
            } else {
                player.currencyAmount.pokecoins -= (item.pokecoins * 10);
                if (item.ball) {
                    player.ballsAmount[item.ball] += 10;
                    dom.renderBalls();
                }
                this.renderHoennPokeCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyHoennPokeCoinItem100: function (index) {
            const item = this.hoennPokecoinShopItems[index];
            if (player.currencyAmount.pokecoins < (item.pokecoins * 100)) {
                return false;
            } else {
                player.currencyAmount.pokecoins -= (item.pokecoins * 100);
                if (item.ball) {
                    player.ballsAmount[item.ball] += 100;
                    dom.renderBalls();
                }
                this.renderHoennPokeCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyBattleCoinItem: function (index) {
            const item = this.battlecoinShopItems[index];
            if (player.currencyAmount.battlecoins < item.battlecoins) {
                return false;
            } else {
                player.currencyAmount.battlecoins -= item.battlecoins;
                if (item.unlockable) {
                    player.unlocked[item.unlockable] = 1;
                    dom.renderListBox();
                }
                if (item.ball) {
                    player.ballsAmount[item.ball]++;
                    dom.renderBalls();
                }
                this.renderBattleCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyJohtoBattleCoinItem: function (index) {
            const item = this.johtoBattlecoinShopItems[index];
            if (player.currencyAmount.battlecoins < item.battlecoins) {
                return false;
            } else {
                player.currencyAmount.battlecoins -= item.battlecoins;
                if (item.unlockable) {
                    player.unlocked[item.unlockable] = 1;
                    dom.renderListBox();
                }
                if (item.ball) {
                    player.ballsAmount[item.ball]++;
                    dom.renderBalls();
                }
                this.renderJohtoBattleCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyHoennBattleCoinItem: function (index) {
            const item = this.hoennBattlecoinShopItems[index];
            if (player.currencyAmount.battlecoins < item.battlecoins) {
                return false;
            } else {
                player.currencyAmount.battlecoins -= item.battlecoins;
                if (item.unlockable) {
                    player.unlocked[item.unlockable] = 1;
                    dom.renderListBox();
                }
                if (item.ball) {
                    player.ballsAmount[item.ball]++;
                    dom.renderBalls();
                }
                this.renderHoennBattleCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyCatchCoinItem: function (index) {
            const item = this.catchcoinShopItems[index];
            if (player.currencyAmount.catchcoins < item.catchcoins) {
                return false;
            } else {
                player.currencyAmount.catchcoins -= item.catchcoins;
                if (item.unlockable) {
                    player.unlocked[item.unlockable] = 1;
                    dom.renderListBox();
                    dom.renderRouteList();
                }
                this.renderCatchCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyJohtoCatchCoinItem: function (index) {
            const item = this.johtoCatchcoinShopItems[index];
            if (player.currencyAmount.catchcoins < item.catchcoins) {
                return false;
            } else {
                player.currencyAmount.catchcoins -= item.catchcoins;
                if (item.unlockable) {
                    player.unlocked[item.unlockable] = 1;
                    dom.renderListBox();
                    dom.renderRouteList();
                }
                this.renderJohtoCatchCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        buyHoennCatchCoinItem: function (index) {
            const item = this.hoennCatchcoinShopItems[index];
            if (player.currencyAmount.catchcoins < item.catchcoins) {
                return false;
            } else {
                player.currencyAmount.catchcoins -= item.catchcoins;
                if (item.unlockable) {
                    player.unlocked[item.unlockable] = 1;
                    dom.renderListBox();
                    dom.renderRouteList();
                }
                this.renderHoennCatchCoinShop(); // force refresh of shop
                dom.renderCurrency();
                return true;
            }
        },
        attachDOM: (_dom) => dom = _dom,
    };
    return Town;
};
