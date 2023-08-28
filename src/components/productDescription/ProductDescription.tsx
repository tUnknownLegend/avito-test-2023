import {Descriptions, DescriptionsProps} from 'antd';

// const items: DescriptionsProps['items'] = [
//     {
//         key: '1',
//         label: 'UserName',
//         children: 'Zhou Maomao',
//     },
//     {
//         key: '2',
//         label: 'Telephone',
//         children: '1810000000',
//     },
//     {
//         key: '3',
//         label: 'Live',
//         children: 'Hangzhou, Zhejiang',
//     },
//     {
//         key: '4',
//         label: 'Remark',
//         children: 'empty',
//     },
//     {
//         key: '5',
//         label: 'Address',
//         children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
//     },
// ];

function ProductDescription({title, data} : {title: string, data: object}) {
    const items: DescriptionsProps['items'] = Object.keys(data).map((entry, index: number) => {
        return {
            key: index,
            label: entry.charAt(0).toUpperCase() + entry.slice(1).split('_').join(' '),
            children: data[entry] ?? 'Not defined',
        };
    });
    return (
        <Descriptions title={title} items={items} />
    );
}

export default ProductDescription;
