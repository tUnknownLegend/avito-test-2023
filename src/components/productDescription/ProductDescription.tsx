import {Descriptions, DescriptionsProps} from 'antd';

function ProductDescription({title, data, className}: { title: string, data: object, className: string }) {
    let items: DescriptionsProps['items'];
    if (data) {
        items = Object.keys(data).map((entry, index: number) => {
            return {
                key: index,
                label: entry.charAt(0).toUpperCase() + entry.slice(1).split('_').join(' '),
                children: data[entry] ?? 'Not defined',
            };
        });
    } else {
        items = [
            {
                key: 0,
                label: 'Platform',
                children: 'Browser',
            },
        ];
    }
    return (
        <Descriptions className={className} column={2} title={title} items={items}/>
    );
}

export default ProductDescription;
