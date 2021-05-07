export const legendMap = [{
        icon: require('@/assets/img/legend/legend-icon1.png'),
        label: '预警',
        value: 'warn'
    },
    {
        icon: require('@/assets/img/legend/legend-icon2.png'),
        label: '视频',
        value: 'camera'
    },
    {
        icon: require('@/assets/img/legend/legend-icon3.png'),
        label: '网格员',
        value: 'grid'
    },
    {
        label: '公共设施',
        value: 'facilities',
        type: 'subtitle'
    },
    {
        icon: require('@/assets/img/legend/legend-icon4.png'),
        label: '医院',
        value: 'hospital'
    },
    {
        icon: require('@/assets/img/legend/legend-icon5.png'),
        label: '养老院',
        value: 'beadhouse'
    },
    {
        icon: require('@/assets/img/legend/legend-icon6.png'),
        label: '社区',
        value: 'community'
    },
    {
        icon: require('@/assets/img/legend/legend-icon7.png'),
        label: '学校',
        value: 'school'
    },
    {
        icon: require('@/assets/img/legend/legend-icon8.png'),
        label: '公园',
        value: 'park'
    }

]

export function filterLegend(legendArr) {
    return legendArr.map(legend => legendMap.find(item => item.value == legend))
}