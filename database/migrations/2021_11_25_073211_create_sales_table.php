<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->decimal('total',12,2);
            $table->string('dateSale');
            $table->timestamps();
            $table->foreignId('users_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('products_id')->references('id_products')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
    }
}
