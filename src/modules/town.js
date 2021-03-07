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
        ],
        renderPokeCoinShop: function () {
            let pokecoinShopHTML = '';
            for (let i = 0; i < this.pokecoinShopItems.length; i++) {
                let canBuy = true;
                let own = false;
                if (player.currencyAmount.pokecoins < this.pokecoinShopItems[i].pokecoins) canBuy = false;
                const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
                const buttonText = (own) ? 'Own' : 'Buy';
                const buttonHTML = ` <button onclick="town.buyPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
                pokecoinShopHTML += `<li>${this.pokecoinShopItems[i].name}: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${this.pokecoinShopItems[i].pokecoins}${buttonHTML}</li>`;
            }
            $('#pokecoinShopItems').innerHTML = pokecoinShopHTML;
        },
        renderJohtoPokeCoinShop: function () {
            let pokecoinShopHTML = '';
            for (let i = 0; i < this.johtoPokecoinShopItems.length; i++) {
                let canBuy = true;
                let own = false;
                if (player.currencyAmount.pokecoins < this.johtoPokecoinShopItems[i].pokecoins) canBuy = false;
                const disableButton = (!canBuy || own) ? ' disabled="true"' : '';
                const buttonText = (own) ? 'Own' : 'Buy';
                const buttonHTML = ` <button onclick="town.buyJohtoPokeCoinItem('${i}')"${disableButton}>${buttonText}</button>`;
                pokecoinShopHTML += `<li>${this.johtoPokecoinShopItems[i].name}: <img src="assets/images/currency/PokeCoin.png" height="16" width="16"></img>${this.johtoPokecoinShopItems[i].pokecoins}${buttonHTML}</li>`;
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
                battlecoinShopHTML += `<li>${this.battlecoinShopItems[i].name}: <img src="assets/images/currency/BattleCoin.png" height="16" width="16"></img>${this.battlecoinShopItems[i].battlecoins}${buttonHTML}</li>`;
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
        attachDOM: (_dom) => dom = _dom,
    };
    return Town;
};
