<template>
    <div :class="{[mainClass]: true, ['light-color']: isMainClass}" class="main-menu d-flex justify-content-between">
        <!-- Home -->
        <div class="text-center d-flex justify-content-center align-items-center py-1 py-md-3"
             :class="{'submenu-link-hovered small-size': type === 'desktop'}">
            <router-link to="/" class="menu-link" @click.native="hideMenu">主页</router-link>
        </div>
        <!-- <div class="text-center d-flex justify-content-center align-items-center py-1 py-md-3"
             :class="{'submenu-link-hovered small-size': type === 'desktop'}">
            <router-link to="/services" class="menu-link" @click.native="hideMenu">Services</router-link>
        </div>
        <div class="text-center d-flex justify-content-center align-items-center py-1 py-md-3"
             :class="{'submenu-link-hovered small-size': type === 'desktop'}">
            <router-link to="/cases" class="menu-link" @click.native="hideMenu">Cases</router-link>
        </div> -->
        <!-- <div class="text-center d-flex justify-content-center align-items-center py-1 py-md-3"
             :class="{'submenu-link-hovered small-size': type === 'desktop'}">
            <router-link to="/book" class="menu-link" @click.native="hideMenu">Book</router-link>
        </div> -->
        <div class="d-flex justify-content-center submenu-link"
             :class="{'submenu-link-hovered': type === 'desktop', [dropdownClass]: true}">
            <div class="d-flex align-items-center h-100">
                <div
                        class="dropdown-body"
                        @mouseenter="changeDropdown(type === 'desktop', 0)"
                        @mouseleave="changeDropdown(type === 'desktop', 0)"
                        @click="changeDropdown(type === 'mobile', 0)"
                >
                    <span class="dropdown-button py-1 py-md-3" :class="{open: isOpen[0]}">
                        组合实例
                        <img class="mobile-show" :src="!isOpen[0] ? '/img/arrow-down.svg' : '/img/arrow-up.svg'"
                             alt="Arrow">
                    </span>
                    <div class="dropdown-items" v-show="isOpen[0]">
                        <!-- Dropdown choice: terms -->
                        <p :class="'menu-link ' + firstItemClaas">
                            <router-link class="dark-text" to="/mlportfolio" @click.native="hideMenu">机器学习实例
                            </router-link>
                        </p>
                        <p class="menu-link">
                            <!-- Dropdown choice: videos -->
                            <router-link class="dark-text" to="/rlportfolio" @click.native="hideMenu">强化学习实例
                            </router-link>
                        </p>
                        <p class="menu-link">
                            <!-- Dropdown choice: videos -->
                            <router-link class="dark-text" to="/technical" @click.native="hideMenu">技术路线实例
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center submenu-link"
             :class="{'submenu-link-hovered': type === 'desktop', [dropdownClass]: true}">
            <div class="d-flex align-items-center h-100">
                <div class="dropdown-body"
                     @mouseenter="changeDropdown(type === 'desktop', 1)"
                     @mouseleave="changeDropdown(type === 'desktop', 1)"
                     @click="changeDropdown(type === 'mobile', 1)"
                >
                    <span class="dropdown-button py-1 py-md-3" :class="{open: isOpen[1]}">
                        行情数据
                        <img class="mobile-show" :src="!isOpen[1] ? '/img/arrow-down.svg' : '/img/arrow-up.svg'"
                             alt="Arrow">
                    </span>
                    <div class="dropdown-items" v-show="isOpen[1]">
                        <p :class="'menu-link ' + firstItemClaas">
                            <router-link class="dark-text" to="/issuers" @click.native="hideMenu">Interest Rate
                            </router-link>
                        </p>
                        <p class="menu-link">
                            <router-link class="dark-text" to="/banks" @click.native="hideMenu">Currency Exchange
                            </router-link>
                        </p>
                        <p class="menu-link">
                            <router-link class="dark-text" to="/bonds" @click.native="hideMenu">Bonds
                            </router-link>
                        </p>
                        <p class="menu-link">
                            <router-link class="dark-text" to="/stocks" @click.native="hideMenu">Stocks
                            </router-link>
                        </p>
                        <p class="menu-link">
                            <router-link class="dark-text" to="/futures" @click.native="hideMenu">Futures
                            </router-link>
                        </p>
                        <p class="menu-link">
                            <router-link class="dark-text" to="/optionchina" @click.native="hideMenu">Options
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
<!--        <div class="text-center d-flex justify-content-center align-items-center py-1 py-md-3"-->
<!--             :class="{'submenu-link-hovered small-size': type === 'desktop'}">-->
<!--            <router-link to="/team" class="menu-link" @click.native="hideMenu">Команда</router-link>-->
<!--        </div>-->
        <div class="text-center d-flex justify-content-center align-items-center py-1 py-md-3"
             :class="{'submenu-link-hovered': type === 'desktop'}">
            <router-link to="#contacts" class="menu-link" @click.native.prevent="hideMenu">Contact</router-link>
        </div>
    </div>
</template>

<script>
import Settings from '@/settings';
import Vue from 'vue';

export default {
  name: 'MenuNavbar',
  props: {
    dropdownClass: {
      default: '',
    },
    mainClass: {},
    firstItemClaas: {
      default: '',
    },
    isMainClass: {
      default: false,
      type: Boolean,
    },
    type: {
      default: 'desktop',
    },
  },
  data() {
    return {
      Settings,
      isOpen: [
        false,
        false,
      ],
    };
  },
  methods: {
    changeDropdown(isNeedType, index) {
      if (isNeedType) {
        Vue.set(this.isOpen, index, !this.isOpen[index]);
      }
    },
    hideMenu() {
      this.$emit('hide-sidebar');
    },
  },
};
</script>

<style>

.submenu-link-hovered {
    width: 150px;
}

.submenu-link-hovered.small-size {
    width: 120px;
}

.light-color a, .light-color .dropdown-button {
    color: white !important;
}

.menu-link > a, .menu-link, .dropdown-button {
    color: black !important;
    line-height: 1.1rem;
}

.dropdown-button {
    display: flex;
}

.dropdown-button > .dropdown-arrow.up {
    display: none;
}

.dropdown-button > .dropdown-arrow.down {
    display: block;
}

.dropdown-button:hover > .dropdown-arrow.up,
.dropdown-button:focus > .dropdown-arrow.up,
.dropdown-body:hover .dropdown-button > .dropdown-arrow.up,
.dropdown-body:focus .dropdown-button > .dropdown-arrow.up {
    display: block;
}

.dropdown-button:hover > .dropdown-arrow.down,
.dropdown-button:focus > .dropdown-arrow.down,
.dropdown-body:hover .dropdown-button > .dropdown-arrow.down,
.dropdown-body:focus .dropdown-button > .dropdown-arrow.down {
    display: none;
}

.dropdown-arrow {
    margin-left: 3px;
}

.light-color {
    color: white;
}

.b-sidebar-body > div > .menu-link > a, .b-sidebar-body > div > .menu-link {
    font-size: 1.2rem;
    font-weight: 500 !important;
}

.b-sidebar-body > div > .menu-link .dropdown-items .menu-link > a {
    font-size: 1.2rem;
    font-weight: 400 !important;
}

div.menu-link {
    padding: 0.3rem 0 0.9rem 0;
}

p.menu-link > a {
    padding-top: 7px;
}

p.menu-link:last-child > a {
    padding-bottom: 7px;
}

.menu-link, .menu-link > a {
    padding: 0;
    display: block;
}

.menu-link:hover, .dropdown-button:hover, .menu-link:hover a {
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
}

.dropdown-items {
    position: absolute;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 10px 30px;
    min-width: 220px;
}

.dropdown-items p {
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 0;
}

.dropdown-button:hover {
    cursor: pointer;
}


@media (max-width: 992px) {
    .main-menu {
        flex-direction: column;
    }

    .navbar-expand-lg .navbar-nav > * {
        flex-direction: row !important;
    }

    .dropdown-button {
        display: flex;
        padding: 3px 0 0 0;
        font-size: 1.2rem;
    }

    a.menu-link {
        padding: 3px 0;
        font-size: 1.2rem;
        margin-top: 1.1rem;
        font-weight: bold !important;
    }

    p.menu-link > a {
        padding: 3px 0 3px 0;
        font-size: 1.2rem !important;
        margin-top: 1.1rem;
    }

    .dropdown-items p.menu-link > a {
        font-weight: 400 !important;
    }

    div.menu-link {
        padding: 0;
        font-size: 1.2rem;
        margin-top: 1.1rem;
        font-weight: bold !important;
    }

    .menu-link, .dropdown-button {
        font-size: 1.2rem;
        text-align: left;
        width: 100%;
        font-weight: bold !important;
    }

    .menu-link a:hover, .menu-link:hover, .dropdown-button:hover, .dropdown-body:hover .dropdown-button {
        text-decoration: none;
        /*font-size: 1.2rem;*/
        /*line-height: 1.2rem;*/
        color: white !important;
    }

    div.menu-link.d-flex {
        /*justify-content: end !important;*/
    }

    .dark-text {
        color: white !important;
    }

    .dark-text {
        color: white !important;
    }

    .dropdown-items {
        border: none;
        background: none;
        padding: 0;
        border-radius: 0;
        position: static;
        margin: 10px 0;
    }

    .dropdown-items .menu-link > a {
        color: white !important;
        font-size: 1rem !important;
    }

    .dropdown-button {
        display: flex;
        justify-content: space-between;
    }

    .submenu-link > div {
        width: 100%;
    }

    .submenu-link .dropdown-body {
        width: 100%;
    }
}
</style>