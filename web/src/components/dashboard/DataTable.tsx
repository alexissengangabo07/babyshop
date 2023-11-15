"use client"

// DataTable.tsx
import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface DataTableProps {
    columns: any[];
    data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');

    const getColumnSearchProps = (dataIndex: string) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
            <div className="p-4">
                <Input
                    placeholder={`Rechercher par ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                    className='border-gray-300'
                />
                <Button
                    type="primary"
                    onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    // icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                    className='bg-blue-500'
                >
                    Rechercher
                </Button>
                <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Effacer
                </Button>
            </div>
        ),
        filterIcon: (filtered: any) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value: any, record: any) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        // onFilterDropdownVisibleChange: (visible: boolean) => {
        //     if (visible) {
        //         setTimeout(() => document.getElementById('search-input')?.select(), 100);
        //     }
        // },
        render: (text: any) =>
            searchedColumn === dataIndex ? <span className="font-bold">{text}</span> : text,
    });

    const handleSearch = (selectedKeys: any[], confirm: any, dataIndex: string) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: any) => {
        clearFilters();
        setSearchText('');
    };

    return (
        <Table
            columns={columns.map((column) => ({
                ...column,
                ...getColumnSearchProps(column.dataIndex),
            }))}
            dataSource={data}
            pagination={{ pageSize: 6 }}
            className="mt-4 bg-gray-800"
            rowClassName={(record, index) => (index % 2 === 0 ? 'bg-gray-800' : 'bg-[#111827]')}
            
        />
    );
};

export default DataTable;
