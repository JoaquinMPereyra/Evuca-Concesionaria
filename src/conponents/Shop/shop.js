import React from "react";
import "./shop.css"
import {apiSimpleAutos} from "../../Data/apiAutos.js"
import {apiSimpleMotos} from "../../Data/apiMotos.js"
import {apiSimpleTractores} from "../../Data/apiTractores.js"
import ShopCard from "../ShopCard/shopcard.jsx"
import { connect } from 'react-redux';


export function Shop(props) {
    const shopId = props.match.params.id;
    let marcasDeAutos = ["Fiat", "Volkswagen", "Ford", "Peugeot","Renault"]
    let marcasDeMotos = ["Corven","Honda","Yamaha"]
    let marcasDeTractores = ["Deutz","John Deere","New Holland"]
    if (shopId === "autos"){
        return(
            <div className="shopContainer">
                {apiSimpleAutos.map(a =><ShopCard
                props = {a}
                />
                )}
            </div>
        )
    }
    if (shopId === "motos"){
        return(
            <div className="shopContainer">
                {apiSimpleMotos.map(m =><ShopCard
                props = {m}
                />
                )}
            </div>
        )
    }
    if (shopId === "tractores"){
        return(
            <div className="shopContainer">
                {apiSimpleTractores.map(t =><ShopCard
                props = {t}
                />
                )}
            </div>
        )
    }
    if(marcasDeAutos.includes(shopId)){
        let autosFiltrados = apiSimpleAutos.filter(auto => auto.marca === shopId)
        return(
            <div className="shopContainer">
                {autosFiltrados.map(a =><ShopCard
                props = {a}
                />
                )}
            </div>
        )
    }
    if(marcasDeMotos.includes(shopId)){
        let motosFiltradas = apiSimpleMotos.filter(moto => moto.marca === shopId)
        return(
            <div className="shopContainer">
                {motosFiltradas.map(m =><ShopCard
                props = {m}
                />
                )}
            </div>
        )
    }
    if(marcasDeTractores.includes(shopId)){
        let tractoresFiltrados = apiSimpleTractores.filter(tractor => tractor.marca === shopId)
        return(
            <div className="shopContainer">
                {tractoresFiltrados.map(t =><ShopCard
                props = {t}
                />
                )}
            </div>
        )
    }
    else{
        return window.location.href="/"
    }
}

function mapStateToProps(state) {
    return {
    dataSimple: state?.dataSimple ? state.dataSimple : [],
    }
}

export default connect(mapStateToProps)(Shop)