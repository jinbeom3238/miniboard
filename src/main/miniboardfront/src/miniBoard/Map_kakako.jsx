import React, { useEffect, useState } from "react";
const { kakao } = window;

const Map_Kakao = () => {

    const [markersData, setMarkersData] = useState([]);

    useEffect(() => {
        let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        let options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        let geocoder = new kakao.maps.services.Geocoder();

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

            // 클릭한 위도, 경도 정보를 가져옵니다 
            let latlng = mouseEvent.latLng;

            let marker = new kakao.maps.Marker({
                // 지도 중심좌표에 마커를 생성합니다 
                position: map.getCenter()
            });
            // 지도에 마커를 표시합니다
            marker.setMap(map);

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);


            // 좌표로 주소 정보를 가져옵니다
            geocoder.coord2Address(latlng.getLng(), latlng.getLat(), function (result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    let detailAddr = !!result[0].road_address ? '<br>도로명주소 : ' + result[0].road_address.address_name : '';
                    alert('클릭한 위치의 주소는 ' + result[0].address.address_name + detailAddr + ' 입니다');
                }
            });

            // setMarkersData(prevData => [...prevData, { lat: lat }])

        });

    }, [])


    return (
        <>
            <div id="map" style={{ width: "200px", height: "200px" }}></div>
        </>
    );
}

export default Map_Kakao;