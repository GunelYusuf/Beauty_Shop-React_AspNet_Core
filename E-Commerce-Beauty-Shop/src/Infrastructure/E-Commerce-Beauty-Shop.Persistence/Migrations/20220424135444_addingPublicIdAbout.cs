using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace E_Commerce_Beauty_Shop.Persistence.Migrations
{
    public partial class addingPublicIdAbout : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("2d2aec53-1f11-4df8-8873-f552702932b5"));

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("6fbbdfbe-3ab4-4833-99f2-2d572f91601a"));

            migrationBuilder.AddColumn<string>(
                name: "PublicId",
                table: "Abouts",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("bdf4244d-a186-4327-a6b7-337b32fa4390"), "118d0363-7111-49c0-87a4-ed97df9a4857", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("ecc7f369-b9c6-4af8-b018-f2f009d65203"), "c5485839-03e5-480c-b524-90749849cb10", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("bdf4244d-a186-4327-a6b7-337b32fa4390"));

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("ecc7f369-b9c6-4af8-b018-f2f009d65203"));

            migrationBuilder.DropColumn(
                name: "PublicId",
                table: "Abouts");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("2d2aec53-1f11-4df8-8873-f552702932b5"), "467856b4-30a6-4da8-94e9-caa35257022b", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("6fbbdfbe-3ab4-4833-99f2-2d572f91601a"), "528fd610-779c-4725-889c-e210ed406dce", "Admin", "ADMIN" });
        }
    }
}
