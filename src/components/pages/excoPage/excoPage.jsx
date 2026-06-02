import React, { Component, useEffect, useState } from "react";

import { TITLE, SESSION } from "../../../const";

import Loader from "../../loader";
import Select from "../../select";

import "./excoPage.css";


function excoPage() {

    let [loading, setLoading] = useState(true);

    let [session, setSession] = useState("");
    let [sessionList, setSessionList] = useState([]);
    let [excos, setExcos] = useState([]);
    useEffect(() => {


        fetch("https://csess.su.hkust.edu.hk/api/sessions.php")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setSessionList(data)
                setSession(data[0])
                fetch(
                    `https://csess.su.hkust.edu.hk/api/excos.php?session=${data[0]}`,
                )
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        setExcos(data)
                        setLoading(false)
                    });
            });

    }, []);

    function renderExcos() {
        function addSrc(src) {
            return function (img) {
                if (img) {
                    img.src = src;
                }
            };
        }
        if (excos && excos.length > 0) {
            return (
                <div className="excos">
                    {excos.map((exco) => {
                        return (
                            <div className="exco" key={exco.sequence}>
                                <picture>
                                    <source
                                        srcSet={encodeURI(
                                            "https://assets.csess.workers.dev/images/h_500,w_500,to_avif/" +
                                            `https://csess.su.hkust.edu.hk/home/images/exco/${exco.session}/${exco.nickname}.jpg`)
                                        }
                                        type="image/avif"
                                    />
                                    <source
                                        srcSet={encodeURI(
                                            "https://assets.csess.workers.dev/images/h_500,w_500,to_webp/" +
                                            `https://csess.su.hkust.edu.hk/home/images/exco/${exco.session}/${exco.nickname}.jpg`)
                                        }
                                        type="image/webp"
                                    />
                                    <img
                                        className="exco-img"
                                        alt={exco.name}
                                        ref={addSrc(encodeURI(
                                            `https://csess.su.hkust.edu.hk/home/images/exco/${exco.session}/${exco.nickname}.jpg`),
                                        )}
                                    />
                                </picture>

                                <div className="exco-desc">
                                    <div className="exco-detail exco-post">{exco.position}</div>
                                    <div className="exco-detail exco-name">{exco.name}</div>
                                    <div className="exco-detail exco-nick">{exco.nickname}</div>
                                    {exco.major && (
                                        <div className="exco-detail exco-major">
                                            Major:{" "}
                                            {`${exco.major}${exco.session === SESSION ? "/" + exco.year : ""
                                                }`}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }
    return <div>
        <title>{`Excos | ${TITLE}`}</title>
        <div className="excoPage">
            <div className="container">
                <h1 className="pageHeader">Excos</h1>
                {loading ?
                    <Loader></Loader> :
                    <div>
                        <Select
                            defaultValue={session}
                            options={sessionList}
                        />
                        <h2>Session {session}</h2>{renderExcos()}</div>}

            </div>
        </div>
    </div>
}
export default excoPage;