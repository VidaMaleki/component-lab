import { ComponentShowcase } from '../ComponentShowcase';
import { ArrowUpDown, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

type Row = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
};

type SortableColumn = 'name' | 'email' | 'role';

export default function TablesSection() {
    const [sortColumn, setSortColumn] = useState<SortableColumn | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const data: Row[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', status: 'Active' },
        { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' },
    ];

    const filteredData = data.filter(
        (row) =>
            row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortColumn) return 0;

        const aVal = a[sortColumn].toString().toLowerCase();
        const bVal = b[sortColumn].toString().toLowerCase();

        if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const paginatedData = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Tables</h1>
                <p className="text-slate-600">
                    Data tables with sorting, searching, and pagination capabilities.
                </p>
            </div>

            {/* Basic Table */}
            <ComponentShowcase
                title="Basic Table"
                description="Simple data table"
                preview={
                    <div className="w-full overflow-x-auto">
                        <table className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm text-slate-700">Name</th>
                                    <th className="px-4 py-3 text-left text-sm text-slate-700">Email</th>
                                    <th className="px-4 py-3 text-left text-sm text-slate-700">Role</th>
                                    <th className="px-4 py-3 text-left text-sm text-slate-700">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr className="hover:bg-slate-50">
                                    <td className="px-4 py-3 text-sm text-slate-900">John Doe</td>
                                    <td className="px-4 py-3 text-sm text-slate-600">john@example.com</td>
                                    <td className="px-4 py-3 text-sm text-slate-600">Admin</td>
                                    <td className="px-4 py-3">
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="px-4 py-3 text-sm text-slate-900">Jane Smith</td>
                                    <td className="px-4 py-3 text-sm text-slate-600">jane@example.com</td>
                                    <td className="px-4 py-3 text-sm text-slate-600">User</td>
                                    <td className="px-4 py-3">
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="px-4 py-3 text-sm text-slate-900">Bob Johnson</td>
                                    <td className="px-4 py-3 text-sm text-slate-600">bob@example.com</td>
                                    <td className="px-4 py-3 text-sm text-slate-600">User</td>
                                    <td className="px-4 py-3">
                                        <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">Inactive</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
                code={`<table className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
  <thead className="bg-slate-50">
    <tr>
      <th className="px-4 py-3 text-left text-sm text-slate-700">Name</th>
      <th className="px-4 py-3 text-left text-sm text-slate-700">Email</th>
      <th className="px-4 py-3 text-left text-sm text-slate-700">Role</th>
      <th className="px-4 py-3 text-left text-sm text-slate-700">Status</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-slate-200">
    <tr className="hover:bg-slate-50">
      <td className="px-4 py-3 text-sm text-slate-900">John Doe</td>
      <td className="px-4 py-3 text-sm text-slate-600">john@example.com</td>
      <td className="px-4 py-3 text-sm text-slate-600">Admin</td>
      <td className="px-4 py-3">
        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
      </td>
    </tr>
  </tbody>
</table>`}
            />

            {/* Sortable Table */}
            <ComponentShowcase
                title="Sortable Table"
                description="Table with sortable columns"
                preview={
                    <div className="w-full overflow-x-auto">
                        <table className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-4 py-3 text-left">
                                        <button
                                            onClick={() => {
                                                setSortColumn('name');
                                                setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                                            }}
                                            className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
                                        >
                                            Name
                                            <ArrowUpDown className="w-4 h-4" />
                                        </button>
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        <button onClick={() => {
                                            setSortColumn('email');
                                            setSortDirection(
                                                sortColumn === 'email' && sortDirection === 'asc' ? 'desc' : 'asc'
                                            );
                                        }} className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
                                            Email
                                            <ArrowUpDown className="w-4 h-4" />
                                        </button>
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm text-slate-700">Role</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {sortedData.slice(0, 3).map((row) => (
                                    <tr key={row.id} className="hover:bg-slate-50">
                                        <td className="px-4 py-3 text-sm text-slate-900">{row.name}</td>
                                        <td className="px-4 py-3 text-sm text-slate-600">{row.email}</td>
                                        <td className="px-4 py-3 text-sm text-slate-600">{row.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
                code={`import { ArrowUpDown } from 'lucide-react';
import { useState } from 'react';

function SortableTable() {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  return (
    <table className="w-full bg-white border border-slate-200 rounded-lg">
      <thead className="bg-slate-50">
        <tr>
          <th className="px-4 py-3 text-left">
            <button
              onClick={() => {
                setSortColumn('name');
                setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
              }}
              className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
            >
              Name
              <ArrowUpDown className="w-4 h-4" />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{/* table rows */}</tbody>
    </table>
  );
}`}
            />

            {/* Searchable Table */}
            <ComponentShowcase
                title="Searchable Table"
                description="Table with search functionality"
                preview={
                    <div className="w-full space-y-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="search"
                                placeholder="Search by name or email..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm text-slate-700">Name</th>
                                        <th className="px-4 py-3 text-left text-sm text-slate-700">Email</th>
                                        <th className="px-4 py-3 text-left text-sm text-slate-700">Role</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {filteredData.slice(0, 3).map((row) => (
                                        <tr key={row.id} className="hover:bg-slate-50">
                                            <td className="px-4 py-3 text-sm text-slate-900">{row.name}</td>
                                            <td className="px-4 py-3 text-sm text-slate-600">{row.email}</td>
                                            <td className="px-4 py-3 text-sm text-slate-600">{row.role}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                code={`import { Search } from 'lucide-react';
import { useState } from 'react';

function SearchableTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = data.filter(row =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg"
        />
      </div>
      <table>{/* table content */}</table>
    </div>
  );
}`}
            />

            {/* Paginated Table */}
            <ComponentShowcase
                title="Paginated Table"
                description="Table with pagination controls"
                preview={
                    <div className="w-full space-y-4">
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm text-slate-700">Name</th>
                                        <th className="px-4 py-3 text-left text-sm text-slate-700">Email</th>
                                        <th className="px-4 py-3 text-left text-sm text-slate-700">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {paginatedData.map((row) => (
                                        <tr key={row.id} className="hover:bg-slate-50">
                                            <td className="px-4 py-3 text-sm text-slate-900">{row.name}</td>
                                            <td className="px-4 py-3 text-sm text-slate-600">{row.email}</td>
                                            <td className="px-4 py-3">
                                                <span
                                                    className={`px-2 py-1 rounded text-xs ${row.status === 'Active'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-slate-100 text-slate-700'
                                                        }`}
                                                >
                                                    {row.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-slate-600">
                                Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                                {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} results
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <div className="flex gap-1">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-3 py-1 rounded text-sm ${currentPage === page
                                                ? 'bg-indigo-600 text-white'
                                                : 'text-slate-700 hover:bg-slate-100'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                }
                code={`import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function PaginatedTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-4">
      <table>{/* table content */}</table>
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-600">
          Showing {(currentPage - 1) * itemsPerPage + 1} to {currentPage * itemsPerPage}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            <ChevronLeft className="w-5 h-5" />
          </button>
          {/* Page numbers */}
          <button onClick={() => setCurrentPage(currentPage + 1)}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}`}
            />

            {/* Striped Table */}
            <ComponentShowcase
                title="Striped Table"
                description="Table with alternating row colors"
                preview={
                    <div className="w-full overflow-x-auto">
                        <table className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm text-slate-700">ID</th>
                                    <th className="px-4 py-3 text-left text-sm text-slate-700">Name</th>
                                    <th className="px-4 py-3 text-left text-sm text-slate-700">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.slice(0, 4).map((row, index) => (
                                    <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                        <td className="px-4 py-3 text-sm text-slate-600">{row.id}</td>
                                        <td className="px-4 py-3 text-sm text-slate-900">{row.name}</td>
                                        <td className="px-4 py-3 text-sm text-slate-600">{row.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
                code={`<table className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
  <thead className="bg-slate-50">
    <tr>
      <th className="px-4 py-3 text-left text-sm text-slate-700">Name</th>
    </tr>
  </thead>
  <tbody>
    {data.map((row, index) => (
      <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
        <td className="px-4 py-3 text-sm text-slate-900">{row.name}</td>
      </tr>
    ))}
  </tbody>
</table>`}
            />
        </div>
    );
}
